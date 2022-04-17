var dropdown = $("#breeds-dropdown");
var breed;
var allowSubmit = true;
var dogImage = $("#dog-image")

$.get('https://dog.ceo/api/breeds/list/all', function (data, status) {
    let breedList = data.message;
    for (let breed in breedList) {
        dropdown.append('<option value="' + breed + '">' + breed + '</option>');
    }
});

dropdown.change(function (){
    allowSubmit = true;
});

$("form button").click( function (e) {
    e.preventDefault();

    if(allowSubmit){
        breed = dropdown.val();
        displayDog(breed);
        allowSubmit = false;
    }
});

$("#next a").click( function (e) {
    e.preventDefault();

    if (breed != undefined) {
        displayDog(breed);
    }
});

function displayDog(breed){
    let url = "https://dog.ceo/api/breed/" + breed + "/images/random";

    $("#dog-image img,h1").remove();

    $.get(url, function (data, status) {
        let imageUrl = data.message;
        dogImage.append('<img src="' + imageUrl + '" alt="' + breed + '">');
        dogImage.append('<h1>' + breed + '</h1>');
    });
}