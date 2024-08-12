// import { v4 } from "uuid";
import bcrypt from "bcrypt";

import {
  // getAllMovies,
  // getMoviesById,
  // UpdateMovieById,
  // deleteMovieById,
  createUser,
} from "../services/user.services.js";

// async function getAllMoviesCtr(request, response) {
//   // response.send(movies);
//   try {
//     const allMovies = await getAllMovies();
//     response.status(200).send(allMovies.data);
//   } catch (err) {
//     console.log(err);
//     response.status(500).send({ msg: " Couldn't get what you wanted " });
//   }
// }

// async function getMoviebyIdCtr(request, response) {
//   const { id } = request.params;
//   // console.log(movie.data);
//   try {
//     const movie = await getMoviesById(id);
//     console.log(movie);
//     movie.data
//       ? response.send(movie.data)
//       : response.status(404).send({ msg: "Movie not found" });
//   } catch (err) {
//     response.status(500).send({ msg: "failed to retrieve" });
//   }
// }

// async function deleteMovieCtr(request, response) {
//   const { id } = request.params;

//   try {
//     const movie = await getMoviesById(id);
//     if (movie.data) {
//       // const mid = movies.indexOf(movie);
//       // movies.splice(mid, 1);
//       await deleteMovieById(id);
//       response.send({ msg: "Movie deleted 🎉" });
//     } else {
//       response.status(404).send({ msg: "there is No such Movie 🥲" });
//     }
//   } catch (err) {
//     response.status(500).send({ msg: "Failed to Perform delete" });
//   }
// }

async function createUserCtr(req, res) {
  const data = req.body;
  try {
    await createUser(data);
    res.status(201).send(data);
  } catch (err) {
    console.log(err);
    res.send({ msg: "unable to create" });
  }
}

// async function updateMovieCtr(request, response) {
//   const { id } = request.params;
//   const updateMovie = request.body;
//   try {
//     const movie = await getMoviesById(id);
//     if (movie.data) {
//       const mergedData = await UpdateMovieById(movie, updateMovie);
//       console.log("updated..");
//       response.send(mergedData.data);
//     } else {
//       response.status(404).send("No such Movie 🥲");
//     }
//   } catch (err) {
//     response.status(500).send({ msg: "Movie not found" });
//   }
// }

export {
  //   getAllMoviesCtr,
  //   deleteMovieCtr,
  createUserCtr,
  //   updateMovieCtr,
  //   getMoviebyIdCtr,
};
