function displayImage(data){

    $('<img>', {
        src: data.url,
        height: '100%',
        width: '100%',
        alt: data.explanation
    }).appendTo('#image-container');
}

$.ajax({
    url: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
    method: 'GET',
    success: displayImage
});