import axios from "axios";
import { BASE_URL } from "./urls";

const ApiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default ApiClient;
