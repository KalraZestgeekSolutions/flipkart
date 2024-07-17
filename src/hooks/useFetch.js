import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const response = axios.post(url);
    setData(response.data.data);
  }, [url]);
  return [data];
};

export default useFetch;
