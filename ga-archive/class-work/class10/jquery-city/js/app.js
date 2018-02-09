// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
$('.thumb').click(function(){
    var thumbSrc = $(this).attr('src')

    console.log(thumbSrc);

    $('#bigimage').attr('src', thumbSrc)
})

// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked
