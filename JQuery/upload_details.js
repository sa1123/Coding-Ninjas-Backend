$("body").height(window.innerHeight-10);
var items = $("#items");

$("form button").click(function(e) {

    let roll = $("#roll");
    let name = $("#name");
    let marks = $("#marks");

    let rollVal = roll.val();
    let nameVal = name.val();
    let marksVal = marks.val();

    e.preventDefault();

    if(rollVal === "" || nameVal === "" || marksVal === "") {
        alert("please fill all");
    } else {
        
        let item = '<div class="items">Roll no - <span class="highlights">' + rollVal + '</span> , <span class="highlights">' + nameVal + '<span class="highlights">' + marksVal + '</span> marks</div>';

        items.append(item);

        roll.val("");
        name.val("");
        marks.val("");
    }
})