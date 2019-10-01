var side = document.getElementById("side");
var toggle = document.getElementById("toggle");

toggle.addEventListener("click", function() {
    if (side.className == "navm showm") {
        side.className = "navm hidem";
    } else {
        side.className = "navm showm";
    }
});

document.addEventListener("click", function(e) {
    if (side.className == "navm showm") {
        if (e.clientX > 200) {
            side.className = "navm hidem";
        }
    }
});