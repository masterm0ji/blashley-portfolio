function dynamicClick() {
    var x = document.getElementById("portTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}