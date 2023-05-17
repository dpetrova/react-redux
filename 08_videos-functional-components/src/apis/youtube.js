import axios from "axios";

const KEY = "AIzaSyALn9x1hcL31xvxwb2vUOObbNO5VoS1BjI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
