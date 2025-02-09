require("dotenv").config();

const mysql = require("mysql2/promise");

const database = mysql.createPool({
  host: process.env.DB_HOST, // address of the server
  port: process.env.DB_PORT, // port of the DB server (mysql), not to be confused with the APP_PORT !
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const getMovies = database.query("SELECT * FROM movies");
const getUsers = database.query("SELECT * FROM users");

Promise.all([getMovies, getUsers])
  .then(([movies, users]) => {
    // console.log(movies[0]);
    // console.log(users[0]);
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = database;
