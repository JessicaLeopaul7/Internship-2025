import axios from 'axios';

const API_KEY = import.meta.env.VITE_YT_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const fetchPopularVideos = async (pageToken = "") => {
  const response = await axios.get(`${BASE_URL}/videos`, {
    params: {
      part: 'snippet,contentDetails,statistics',
      chart: 'mostPopular',
      regionCode: 'IN',
      maxResults: 50,
      pageToken: pageToken, 
      key: API_KEY,
    },
  });
  return response.data;
};

export const fetchCategoryVideos = async (category: string, pageToken: string = "") => {
  const categories: { [key: string]: number } = {
    Music: 10,
    Sports: 17,
    Gaming: 20,
    Comedy: 23,
    Entertainment: 24,
    News: 25,
    Science: 28
  };
  const categoryId = categories[category];

  const response = await axios.get(`${BASE_URL}/videos`, {
    params: {
      part: 'snippet,contentDetails,statistics',
      chart: 'mostPopular',
      regionCode: 'IN',
      videoCategoryId:categoryId,
      maxResults: 50,
      pageToken: pageToken, 
      key: API_KEY,
    },
  });
  return response.data;
};

export const fetchRecentVideos = async (pageToken = "") => {
  const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

  const response = await axios.get(`${BASE_URL}/search`, {
    params: {
      part: 'snippet',
      maxResults: 50,
      order: 'date',
      publishedAfter: oneWeekAgo,
      regionCode: 'IN',
      type: 'video',
      pageToken: pageToken,
      key: API_KEY,
    },
  });
  return response.data;
};

export const fetchSearchResults = async (query:string,
  setVideos: (videos: any[]) => void,
  setLoading: (loading: boolean) => void,
  setError: (error: string | null) => void) => {
  
  setLoading(true);
  setError(null);
  try {
    const response = await axios.get(
      `${BASE_URL}/search`,
      {
        params: {
          part: "snippet",
          q: query,
          type: "video",
          maxResults: 20,
          key: API_KEY,
        },
      }
    );
    setVideos(response.data.items);
  } catch (err: any) {
    setError("Error fetching data");
    console.error(err);
  } finally {
    setLoading(false);
  }
  return; 
};

export const fetchVideoDetails = async (videoId: string) => {
  const response = await axios.get(`${BASE_URL}/videos`, {
    params: {
      part: 'snippet,statistics,contentDetails',
      id: videoId,
      key: API_KEY,
    },
  });

  return response.data.items[0]; 
};