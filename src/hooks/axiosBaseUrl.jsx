import axios from "axios";

const axiosBaseUrl = axios.create({
  baseURL: "https://company-portfolio-server-beta.vercel.app",
});

const useAxiosBaseUrl = () => {
  return axiosBaseUrl;
};
export default useAxiosBaseUrl;

