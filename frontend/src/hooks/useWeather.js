import { useEffect, useState } from "react";

const useWeather = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  return data;
};

export default useWeather;
