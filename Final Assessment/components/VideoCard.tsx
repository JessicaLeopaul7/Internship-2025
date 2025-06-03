import { Link } from "react-router-dom";
import "./VideoCard.css";

interface VideoCardProps {
  video: any;
  parent: "home" | "view";
}

const VideoCard = ({ video, parent }: VideoCardProps) => {
  const { snippet, statistics, contentDetails } = video;
  const { title, thumbnails, channelTitle } = snippet;

  function formatDuration(isoDuration: string) {
    const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return "0:00";

    const [, h, m, s] = match.map((v) => parseInt(v || "0"));
    const hours = h || 0;
    const minutes = m || 0;
    const seconds = s || 0;

    const formatted =
      hours > 0
        ? `${hours}:${String(minutes).padStart(2, "0")}:${String(
            seconds
          ).padStart(2, "0")}`
        : `${minutes}:${String(seconds).padStart(2, "0")}`;

    return formatted;
  }

  const duration = formatDuration(contentDetails?.duration || "");

  return (
    <div className={`${parent}-video-card`}>
      <Link
        to={`/watch?v=${video.id.videoId || video.id}`}
        className={`${parent}-video-card`}
      >
        <div className={`${parent}-thumbnail-container`}>
          <img
            src={thumbnails?.medium?.url}
            alt={title}
            className="thumbnail"
            loading="lazy"
          />
          <div className="time-stamp">{duration}</div>
        </div>
        <div className={`${parent}-video-info`}>
          <div className="video-title">{title}</div>
          <div className="video-channel">{channelTitle}</div>
          {statistics?.viewCount ? (
            <div className="video-stats">
              {parseInt(statistics.viewCount).toLocaleString()} views
            </div>
          ) : (
            <div className="video-stats">No views available</div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
