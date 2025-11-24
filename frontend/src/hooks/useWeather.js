import { useEffect, useState } from "react";

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const useWeather = (city) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setWeather(null);
      setError(null);

      const url = `${BACKEND_BASE_URL}/${city}`;

      try {
        const response = await fetch(url);
        const result = await response.json();

        setWeather(result.data);
      } catch (error) {}
    };
    fetchData();
  }, [city]);

  return { weather, loading, error };
};

export default useWeather;
