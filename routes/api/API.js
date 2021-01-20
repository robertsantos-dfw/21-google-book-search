import axios from "axios";

const APIKEY = env.APIKEY
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
    search: function(query) {
      return axios.get(BASEURL + query + APIKEY);
    }
  };
  