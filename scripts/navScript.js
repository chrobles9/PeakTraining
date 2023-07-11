// Mobile menu script
function mobileMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navList") {
        x.className += " mobileMenu";
    } else {
        x.className = "navList";
    }
}

