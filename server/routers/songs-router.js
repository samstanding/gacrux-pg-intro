const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');
const bodyParser = require('body-parser');

router.get('/', function(request, response){
  const sqlText = 'SELECT * FROM songs';
  pool.query(sqlText)
    // query was successful
    .then(function(result) {
      console.log('Get result:', result);
      response.send(result.rows);
    })
    // bad things could happen...
    .catch(function(error){
      console.log('Error on Get:', error);
      response.sendStatus(500);
    })
})

router.post('/add', (request, response) => {
  const song = request.body;
  console.log('Add song:', song);

  const sqlText = `INSERT INTO songs 
      (artist, track, published, rank)
      VALUES ($1, $2, $3, $4)`;
  pool.query(sqlText, 
      [song.artist, song.track, song.published, song.rank])
    .then( (result) => {
      console.log('Added song:', result);
      response.sendStatus(201);
    })
    .catch( (error) => {
      console.log('Error adding song:', error);
      response.sendStatus(500);
    })
})

module.exports = router;