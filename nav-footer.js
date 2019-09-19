var side = document.getElementById("side");
var toggle = document.getElementById("toggle");

toggle.addEventListener("click", function() {
    if(side.className == "nav show"){
        side.className = "nav hide";
    }else{
        side.className = "nav show";
    }
});

document.addEventListener("click", function(e) {
    if(side.className == "nav show"){
        if(e.clientX > 200){
            side.className = "nav hide";
        }
    }
});