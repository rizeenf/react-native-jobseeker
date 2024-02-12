import axios from "axios";
import { REACT_NATIVE_JOBS_API_URL, REACT_NATIVE_JOBS_API_KEY } from "@env";
import { useEffect, useState } from "react";

const url = REACT_NATIVE_JOBS_API_URL;
const apiKey = REACT_NATIVE_JOBS_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const options = {
    method: "GET",
    url: `${url}/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      "X-RapidAPI-Key": "f79139f292msh648f137753efb73p1d1c3cjsn317afafebfa9",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    return () => {};
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isError, isLoading, refetch };
};

export default useFetch;
