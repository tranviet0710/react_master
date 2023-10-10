import axios from "axios";
import { createContext, useEffect, useMemo, useState } from "react";

const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [videoDatas, setVideoDatas] = useState(
    JSON.parse(localStorage.getItem("videos")) || []
  );
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/videos", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          data: "application/json",
        },
        params: {
          limit: 100,
          currentPage: 1,
          sortBy: "publishedAt",
        },
      })
      .then((res) => {
        localStorage.setItem("videos", JSON.stringify(res.data.data.body));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const value = useMemo(
    () => ({
      videoDatas,
      setVideoDatas,
    }),
    [videoDatas]
  );
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
export default DataContext;
