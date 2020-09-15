var prevScrolPosition = window.pageYOffset;
window.onscroll =  function() {

    var currentScrolPos = window.pageYOffset;
    console.log(`previ ${prevScrolPosition} e current ${currentScrolPos}`);
    if (prevScrolPosition>currentScrolPos) {
        document.getElementById("header").style.top = "0";
        document.getElementById("header").style.opacity = "1";
    } else {
        document.getElementById("header").style.top = "-100px";
        document.getElementById("header").style.opacity = "0";
    }

    prevScrolPosition = currentScrolPos;
}