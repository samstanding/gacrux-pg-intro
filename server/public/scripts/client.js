$(document).ready(onReady);

function onReady(){
  console.log('Hello');
  getAllSongs();
}
  function getAllSongs() {
    $.ajax({
      type: 'GET',
      url: '/songs'
    })
    .done(function(response){
      console.log('Getting all songs:', response);
      displaySongs(response);
    })
    .fail(function(error){
      console.log(error);
    })   
  }

  function addSong(song) {
    $.ajax({
      type: 'POST',
      url: '/songs/add',
      data: song
    })
    .done(function(response){
      console.log('Added song:', song);
      //clear non-existant input fields
      getAllSongs();
    })
    .fail(function(error){
      console.log(error);
    })
  }

  function updateSongRating(id, newRating) {
    $.ajax({
      type: 'PUT',
      url: `/songs/${id}`,
      data: { rating: newRating }
    })
    .done(function (response) {
      console.log('Updated song rating');
      getAllSongs();
    })
    .fail(function (error){
      console.log(error);
    })
  }

  function deleteSong(id){
    $.ajax({
      type: 'DELETE',
      url: `songs/${id}`,
    })
    .done(function (response){
      console.log('Deleted song');
      getAllSongs();
    })
    .fail(function(error) {
      console.log(error);
    })
  }

  function displaySongs(songs) {
    for (let song of songs) {
      $('#out-songs').append(`<tr><td>${song.track}</td>
        <td>${song.artist}</td><td>${song.published}</td><td>${song.rank}</td></tr>`);
    }
  }
