import express from "express";
import {generateNewShortenUrl} from "../controllers/urlControllers.js"
const router = express.Router();

router.post("/generate/shorturl",generateNewShortenUrl);

export const urlRouter = router;
