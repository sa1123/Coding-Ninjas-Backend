var sol = $("#sol-input");
var page = 1;
var image = $("#mars-image");

$("#getI").click(function (e) {
    e.preventDefault();
    
    page = 1;
    
    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + sol.val() + "&page=" + page + "&api_key=NBlCLhD21Eud5RxMy1TjZoeJedDa1c1qbsnLMIG2";
    
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

$("#prev").click(function (e) {
    e.preventDefault();
    
    if(page === 1) {
            alert("No prev page");
            return;
    } else {
        page = page - 1;
    }
    
    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + sol.val() + "&page=" + page + "&api_key=NBlCLhD21Eud5RxMy1TjZoeJedDa1c1qbsnLMIG2";
    
    console.log(url);
    
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

$("#next").click(function (e) {
    e.preventDefault();
    
    if(page === 25) {
            alert("No next page");
            return;
    }
    
    page = page + 1;
    
    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + sol.val() + "&page=" + page + "&api_key=NBlCLhD21Eud5RxMy1TjZoeJedDa1c1qbsnLMIG2";
    
    console.log(url);
    
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
