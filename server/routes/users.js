var express = require('express');
var router = express.Router();
var cors = require('cors')
router.use(cors())

const mysql = require('mysql');
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'CRUDDB',
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('incepcionexpres','good express')";
  db.query(sqlInsert, (err, result) => {
    res.send("hello pred, we are into db.query()")
  });
  // res.send('respond with a resource2123sda12');
});

module.exports = router;
