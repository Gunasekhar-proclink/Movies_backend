import express from "express"; // default
import cors from "cors"; // default
import { v4 } from "uuid"; //named import
import moviesRouter from "./routes/movies.routes.js";

// const express = require("express");
// const { v4 } = require("uuid");
const app = express();
// var cors = require("cors");
app.use(cors());
app.use(express.json()); // will aply the middle ware for all the api
const PORT = process.env.PORT || 4000;

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});
// app.get("/movies", function (request, response) {
//   response.send(movies);
// });
// app.get("/movies/:id", function (request, response) {
//   const { id } = request.params;
//   console.log(id);
//   let data = {};
//   data = movies.find((movie) => movie.id == id);
//   if (data) {
//     response.send(data);
//   } else {
//     response.status(404).send({ msg: "movie is not present🥲" });
//   }
// });
// app.delete("/movies/:id", function (request, response) {
//   const { id } = request.params;
//   data = movies.find((movie) => movie.id == id);
//   if (data) {
//     let idx = movies.indexOf(data);
//     movies.splice(idx, 1);
//     response.send({ msg: "movie deleted successfully", data: data });
//   } else {
//     response.status(404).send({ msg: "movie is not present🥲" });
//   }
// });
// // to inform the fn that we are expexcting body as the json data only | middle ware
// // this will convert the body into json
// app.post("/movies", function (request, response) {
//   const data = request.body;
//   console.log(data);
//   movies.push({ id: v4(), ...data });
//   console.log(v4());
//   response.send(movies);
// });
// app.put("/movies/:id", function (request, response) {
//   const { id } = request.params;
//   let data = request.body;
//   console.log(data);
//   let index = movies.findIndex((obj) => obj.id == id);
//   movies[index] = { ...movies[index], ...data };
//   // let movie = movies.find((obj) => obj.id == id);
//   // movie = { ...movie, ...data };
//   //data = { ...movie, };
//   // movie = data;
//   response.send(movies);
// });
app.use("/movies", moviesRouter);
app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
