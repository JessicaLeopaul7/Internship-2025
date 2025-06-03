import { useEffect, useState, useCallback } from "react";
import {
  fetchPopularVideos,
  fetchCategoryVideos,
  fetchRecentVideos,
} from "../api/youtube";
import { useCategory } from "../context/CategoryContext";
import VideoCard from "../components/VideoCard";
import CategoryBar from "../components/CategoryBar";
import "./Home.css";

const Home: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const { category } = useCategory();

  const loadVideos = useCallback(
    async (isLoadMore = false) => {
      try {
        if (isLoadMore) setLoadingMore(true);
        else setLoading(true);

        const data =
          category === "All"
            ? await fetchPopularVideos(nextPageToken)
            : category === "Recently uploaded"
            ? await fetchRecentVideos()
            : await fetchCategoryVideos(category, nextPageToken);
        setVideos((prev) => {
          const allVideos = [...prev, ...data.items];

          const uniqueMap = new Map();
          for (const video of allVideos) {
            const id =
              typeof video.id === "string"
                ? video.id
                : video.id?.videoId ?? video.etag;
            uniqueMap.set(id, video);
          }

          return Array.from(uniqueMap.values());
        });

        setNextPageToken(data.nextPageToken);
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      } finally {
        if (isLoadMore) setLoadingMore(false);
        else setLoading(false);
      }
    },
    [category, nextPageToken]
  );

  useEffect(() => {
    loadVideos(false);
  }, []);

  useEffect(() => {
    setVideos([]);
    setNextPageToken("");
    loadVideos(false);
  }, [category]);

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
    <>
      <CategoryBar />
      <div className="home-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="video-grid">
            {videos.map((video) => (
              <VideoCard
                key={
                  typeof video.id === "string"
                    ? video.id
                    : video.id?.videoId ?? video.etag
                }
                video={video}
                parent="home"
              />
            ))}
          </div>
        )}
        {loadingMore && <p>Loading more videos...</p>}
      </div>
    </>
  );
};

export default Home;
