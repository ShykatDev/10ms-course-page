import axios from "axios";

const client = axios.create({
  baseURL: "/api/ielts",
});

const APIKit = {
  getCourseData: (lang: "en" | "bn") => {
    const url = `/?lang=${lang}`;
    return client.get(url);
  },
};

export default APIKit;
