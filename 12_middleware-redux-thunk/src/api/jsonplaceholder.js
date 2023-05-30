import axios from "axios";

//create customized client instance of axios
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
