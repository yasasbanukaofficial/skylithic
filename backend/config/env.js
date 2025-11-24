import { config } from "dotenv";

config({ path: ".env" });

export const { PORT, WEATHER_API_URL } = process.env;
