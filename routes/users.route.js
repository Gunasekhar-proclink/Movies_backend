import express, { response } from "express";
import { v4 as uuidv4 } from "uuid";
import {
  createUserCtr,
  logicUserCtr,
} from "../controllers/users.controller.js";

const router = express.Router();

// router.get("/", getAllMoviesCtr);

// router.get("/", getMoviebyIdCtr);

// router.delete("/:id", deleteMovieCtr);

router.post("/signup", createUserCtr);
router.post("/login", logicUserCtr);

// router.put("/:id", updateMovieCtr);

export default router;
