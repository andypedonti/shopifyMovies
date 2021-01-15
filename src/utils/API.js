import axios from "axios";

const BASERUL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=2d79ebc8";

export default {
    search: function (query) {
        return axios.get(BASEURL + query + APIKEY);
    }
};