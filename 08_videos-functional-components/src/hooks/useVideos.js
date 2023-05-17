/* CREATE CUSTOM HOOK */

import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (searchTerm) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm,
      },
    });

    setVideos(response.data.items);
  };

  // return list of videos (piece of state) and function used to change the list of videos
  return [videos, search];
};

export default useVideos;
