const numParser = (valueString) => {
  if (!valueString || typeof valueString !== "string") return null;
  const match = valueString.trim().match(/^-?\d+/);
  return match ? parseInt(match[0], 10) : 0;
};

const dateIdentifier = (offset) => {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return date.toLocaleDateString("en-US", { weekday: "long" });
};

const dataFormatter = (data, query) => {
  const forecast = data.forecast || [];
  const modifiedData = {
    current: {
      location: query,
      temp: numParser(data.temperature),
      condition: data.description,
      wind: numParser(data.wind),
    },

    chartData: forecast.slice(0, 3).map((dayData, index) => ({
      label: dateIdentifier(index + 1),
      temp: numParser(dayData.temperature),
    })),

    forecastCards: forecast.slice(0, 3).map((dayData, index) => ({
      label: dateIdentifier(index + 1),
      temp: numParser(dayData.temperature),
      wind: numParser(dayData.wind),
    })),
  };
  return modifiedData;
};

export default dataFormatter;
