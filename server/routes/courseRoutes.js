import express from "express";
import { getAllcourses } from "../controllers/courseController.js";

const router = express.Router();

router.route("/courses").get(getAllcourses);

export default router;
