import axios from "axios";

const BASEURL = "https://api.predic8.de:443";
export const httpClient = axios.create({
  baseURL: BASEURL,
});
