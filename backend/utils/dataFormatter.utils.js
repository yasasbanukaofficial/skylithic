const dataFormatter = (data, query) => {
  const forecast = data.forecast || [];
  const modifiedData = {
    current: {
      location: query,
      temp: data.temperature,
      condition: data.description,
      wind: data.wind,
    },
    chartData: forecast.slice(0, 3).map((dayData, index) => ({
      label: `Day ${dayData.day || index + 1}`,
      value: dayData.temperature,
    })),

    forecastCards: forecast.slice(0, 3).map((dayData, index) => ({
      label: `Day ${dayData.day || index + 1}`,
      temp: dayData.temperature,
      wind: dayData.wind,
    })),
  };
  return modifiedData;
};

export default dataFormatter;
