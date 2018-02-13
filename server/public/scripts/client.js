$(document).ready(onReady);

function onReady(){
  console.log('Hello');

  addSong({
    artist: 'John Rule', 
    track: 'Always on Time', 
    published: '1/1/1999', 
    rank: 2
  });

  function addSong(song) {
    $.ajax({
      type: 'POST',
      url: '/songs/add',
      data: song
    })
    .done(function(response){
      $('#out-songs').text(response);
    })
    .fail(function(error){
      console.log(error);
    })
  }


}