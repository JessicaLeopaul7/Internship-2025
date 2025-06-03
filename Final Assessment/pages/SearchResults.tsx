import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchResults } from "../api/youtube";

import VideoCard from "../components/VideoCard";
import "./SearchResults.css";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query") || "";

  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;
    fetchSearchResults(query, setVideos, setLoading, setError);
  }, [query]);

  return (
    <>
      <div className="search-results-container">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        <div className="video-grid">
          {videos.map((video) => (
            <VideoCard key={video.id.videoId} video={video} parent="home" />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
