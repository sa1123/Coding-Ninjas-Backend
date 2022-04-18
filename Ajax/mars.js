var date = $("#date-input").datepicker({ dateFormat: 'yy-mm-dd' });
var images = $("#mars-image");

$("form button").click( function (e) {
    e.preventDefault();    
    
    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + date.val() + "&api_key=DEMO_KEY";

    $.get(url, function(data) {

        $("#mars-image img").remove();

        for (let photo of data.photos) {
            images.append('<img src="' + photo.img_src + '" alt="' + photo.id + '">');
        }
    });
    
});