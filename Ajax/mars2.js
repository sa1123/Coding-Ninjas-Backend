var sol = $("#sol-input");
var page = $("#page-input");
var image = $("#mars-image");

$("form button").click(function (e) {
    e.preventDefault();
    
    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + sol.val() + "&page=" + page.val() + "&api_key=NBlCLhD21Eud5RxMy1TjZoeJedDa1c1qbsnLMIG2";
    
    $.get(url, function (data) {
        let photos = data.photos;
        
        if(photos.length === 0) {
            alert("No photos");
            return;
        }
        
        $("#mars-image img").remove();
        
        for (let photo of photos) {
            image.append('<img src="' + photo.img_src + '" alt="' + photo.id + '">')
        }
    });
});
