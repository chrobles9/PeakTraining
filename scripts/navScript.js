// Mobile menu script
function mobileMenu() {
    let x = document.getElementById("myTopnav");
    if (x.className === "navList") {
        x.className += " mobileMenu";
        document.getElementById('menuIcon').style.display = 'none'

     } 
    //else {
    //     x.className = "navList";

    // }
}

