import { Router } from "express";
import search from "../controllers/weather.controller.js";
const weatherRoutes = Router();

weatherRoutes.get("/:city", search);

export default weatherRoutes;
