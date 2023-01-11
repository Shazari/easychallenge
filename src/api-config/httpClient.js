import axios from "axios";

export const BASEURL = "https://api.predic8.de:443";
export const httpClient = axios.create({
  baseURL: BASEURL,
});
