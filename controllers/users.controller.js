// import { v4 } from "uuid";
import bcrypt from "bcrypt";

import {
  // getAllMovies,
  // getMoviesById,
  // UpdateMovieById,
  // deleteMovieById,
  createUser,
  getUserByuserName,
} from "../services/user.services.js";
import { response } from "express";

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

const generatePassword = async (password) => {
  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(typeof hashedPassword);
  return hashedPassword;
};

async function createUserCtr(req, res) {
  const data = req.body;
  const password = data.password;
  if (data.password.length < 8) {
    res.status(400).send({ msg: "password is too short" });
    return;
  }
  const userFromDB = await getUserByuserName(data.userName);
  if (userFromDB.data) {
    res.status(400).send({ msg: "user already exists" });
    return;
  }
  const hashedPassword = await generatePassword(password);
  const hasheddata = {
    userName: data.userName,
    password: hashedPassword,
  };
  try {
    await createUser(hasheddata);
    res.status(201).send(hasheddata);
    console.log(hasheddata);
  } catch (err) {
    console.log(err);
    res.send({ msg: "unable to create" });
  }
}

async function logicUserCtr(req, res) {
  const data = req.body;
  const userFromDB = await getUserByuserName(data.userName);
  if (!userFromDB.data) {
    res.status(404).send({ msg: "Invalid Credentials" });
    return;
  } else {
    const storedDBPassword = userFromDB.data.password;
    const providedPassword = data.password;
    const isPasswordCheck = await bcrypt.compare(
      providedPassword,
      storedDBPassword
    );
    if (isPasswordCheck) {
      res.status(200).send({ msg: "Login Successful" });
    } else {
      res.status(400).send({ msg: "Invalid Credentials" });
    }
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
  logicUserCtr,
  //   updateMovieCtr,
  //   getMoviebyIdCtr,
};
