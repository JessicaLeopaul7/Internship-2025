import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchVideoDetails } from "../api/youtube";
import "./VideoPlayer.css";

const formatDescription = (text: string) => {
  const urlRegex = /https?:\/\/[^\s]+/g;
  const parts = text.split(urlRegex);
  const matches = text.match(urlRegex);

  return parts.reduce<React.ReactNode[]>((acc, part, i) => {
    acc.push(<span key={`text-${i}`}>{part}</span>);
    if (matches && matches[i]) {
      acc.push(
        <a
          key={`link-${i}`}
          href={matches[i]}
          target="_blank"
          rel="noopener noreferrer"
          className="description-link"
        >
          {matches[i]}
        </a>
      );
    }
    return acc;
  }, []);
};

const VideoPlayer = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [videoData, setVideoData] = useState<any>(null);
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    if (videoId) {
      fetchVideoDetails(videoId).then(setVideoData).catch(console.error);
    }
  }, [videoId]);

  const fullDescription = formatDescription(
    videoData?.snippet?.description ?? ""
  );
  const previewDescription = formatDescription(
    (videoData?.snippet?.description ?? "").slice(0, 150)
  );

  const viewCount = parseInt(
    videoData?.statistics?.viewCount ?? 0
  ).toLocaleString();
  const uploadDate = new Date(
    videoData?.snippet?.publishedAt
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  if (!videoId) return <p>Video not found.</p>;

  return (
    <div className="watch-video-container">
      <iframe
        className="watch-video-card"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allowFullScreen
      />
      {videoData && (
        <>
          <div className="watch-video-title">{videoData.snippet.title}</div>
          <div className="watch-video-description">
            <p style={{ whiteSpace: "pre-wrap" }}>
              <span>
                {viewCount} views • {uploadDate}
              </span>
              <br />
              {showFull ? fullDescription : previewDescription}
              <br />
              <button onClick={() => setShowFull(!showFull)}>
                {showFull ? "Show Less" : "Show More"}
              </button>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
