$('.meme-form').submit(function(event) {
    event.preventDefault();
    $('.video-wrapper').empty();
    var userInput = $('.meme-input').val();
    // console.log('submitting');
    //javascript, jQuery
    var xhr = $.get(
        "http://api.giphy.com/v1/gifs/search?q="+ userInput +"&api_key=KHnT5Ol4CR5ooO8hIzSwq0R1q41IfGyp&limit=5"
);
    xhr.done(function(data) { 
        var memes = data.data;
        // console.log("success got data", data.data); 

        memes.forEach(function(meme){
            var memeUrl = meme.images.looping.mp4;
      
            $('.video-wrapper').append('<video src="' + memeUrl + '" autoplay></video>');
          });
    });
});

