import { useEffect, useState, useCallback } from "react";
import { fetchPopularVideos } from "../api/youtube";
import VideoCard from "./VideoCard";
import { useSearchParams } from "react-router-dom";
import "./VideoRecommendations.css";

const VideoRecommendations = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const loadVideos = useCallback(
    async (isLoadMore = false) => {
      try {
        isLoadMore ? setLoadingMore(true) : setLoading(true);
        const data = await fetchPopularVideos(nextPageToken);
        setVideos((prev) => {
          const allVideos = [...prev, ...data.items];
          const uniqueMap = new Map();

          for (const video of allVideos) {
            const id =
              typeof video.id === "string"
                ? video.id
                : video.id?.videoId ?? video.etag;

            if (id !== videoId) uniqueMap.set(id, video);
          }

          return Array.from(uniqueMap.values());
        });

        setNextPageToken(data.nextPageToken);
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      } finally {
        isLoadMore ? setLoadingMore(false) : setLoading(false);
      }
    },
    [nextPageToken, videoId]
  );

  useEffect(() => {
    setVideos([]);
    setNextPageToken("");
    loadVideos(false);
  }, [videoId]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.offsetHeight;

      if (scrollTop + windowHeight >= fullHeight - 300 && !loadingMore) {
        loadVideos(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadVideos, loadingMore]);

  return (
    <div className="watch-video-recommendations">
      {loading ? (
        <p>Loading...</p>
      ) : (
        videos.map((video) => (
          <VideoCard
            key={video.id?.videoId || video.id}
            video={video}
            parent="view"
          />
        ))
      )}
      {loadingMore && <p>Loading more videos...</p>}
    </div>
  );
};

export default VideoRecommendations;
