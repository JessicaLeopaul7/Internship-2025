import VideoPlayer from "../components/VideoPlayer";
import VideoRecommendations from "../components/VideoRecommendations";

const WatchVideo = () => {
  return (
    <div className="watch-video-page">
      <VideoPlayer />
      <VideoRecommendations />
    </div>
  );
};

export default WatchVideo;
