const app = angular.module('songApp', []);

const songController = app.controller('SongController', ['$http' ,function ($http) {
  let self = this;

  self.newSong = { };

  self.songArray = [];
  


  self.addSong =function (newSong) {
    console.log(newSong);
    $http({
      method: 'POST',
      url: '/songs/add',
      data: newSong
    })
    .then(function(response){
      self.newSong = {};
      self.getAllSongs();
    })
    .catch(function(error){
      console.log(error);
    })
  }

  self.getAllSongs = function () {
    $http({
      method:'GET',
      url:'/songs'
    }).then(function (response) {
      self.songArray = response.data;
    }).catch(function (error) {
      console.log(`erorr on get ${error}`);
    })
  }

}])




  // getAllSongs();

  // $('#btn-add').on('click', function(event){
  //   event.preventDefault();
  //   let song = getNewSong();
  //   addSong(song);
  // })

  // function getAllSongs() {
  //   $.ajax({
  //     type: 'GET',
  //     url: '/songs'
  //   })
  //   .done(function(response){
  //     console.log('Getting all songs:', response);
  //     displaySongs(response);
  //   })
  //   .fail(function(error){
  //     console.log(error);
  //   })   
  // }

  // function getNewSong() {
  //   const song = {
  //     track: $('#in-track').val(),
  //     artist: $('#in-artist').val(),
  //     published: $('#in-date').val(),
  //     rank: $('#in-rank').val(),
  //   }
  //   return song;
  // }

  // function clearAddForm() {
  //   $('#in-track').val('');
  //   $('#in-artist').val('');
  //   $('#in-date').val('');
  //   $('#in-rank').val('');
  // }


  // function updateSongRating(id, newRating) {
  //   $.ajax({
  //     type: 'PUT',
  //     url: `/songs/${id}`,
  //     data: { rating: newRating }
  //   })
  //   .done(function (response) {
  //     console.log('Updated song rating');
  //     getAllSongs();
  //   })
  //   .fail(function (error){
  //     console.log(error);
  //   })
  // }

  // function deleteSong(id){
  //   $.ajax({
  //     type: 'DELETE',
  //     url: `songs/${id}`,
  //   })
  //   .done(function (response){
  //     console.log('Deleted song');
  //     getAllSongs();
  //   })
  //   .fail(function(error) {
  //     console.log(error);
  //   })
  // }

  // function displaySongs(songs) {
  //   for (let song of songs) {
  //     $('#out-songs').append(`<tr><td>${song.track}</td>
  //       <td>${song.artist}</td><td>${formatDate(song.published)}</td>
  //       <td>${song.rank}</td></tr>`);
  //   }
  // }

  // function formatDate(isoDateStr) {
  //   let result = ''
  //   if (isoDateStr != null) {
  //     let date = new Date(isoDateStr);
  //     result = date.toLocaleDateString();
  //   }
  //   return result;
  // }
