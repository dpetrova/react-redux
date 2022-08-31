import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
// import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos"; // custom hook

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // using custom hook
  const [videos, search] = useVideos("universe");

  // run every time when videos changed
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  /* without custom hook */
  // const [videos, setVideos] = useState([]);
  // const [selectedVideo, setSelectedVideo] = useState(null);

  // // run only once when mount
  // useEffect(() => {
  //   search("universe");
  // }, []);

  // const search = async (searchTerm) => {
  //   const response = await youtube.get("/search", {
  //     params: {
  //       q: searchTerm,
  //     },
  //   });

  //   setVideos(response.data.items);
  //   setSelectedVideo(response.data.items[0]);
  // };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            {/* <VideoList
              videos={videos}
              onVideoSelect={(video) => setSelectedVideo(video)}
            /> */}
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
