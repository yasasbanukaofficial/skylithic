import { Router } from "express";
import search from "../controllers/weather.controller.js";
const weatherRoutes = Router();

weatherRoutes.get("/search", search);

export default weatherRoutes;
