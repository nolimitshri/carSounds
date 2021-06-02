// looping through all of our buttons
for(var i = 0; i<document.querySelectorAll(".car").length; i++) {
    document.querySelectorAll(".car")[i].addEventListener("click", handleClick);
}

// detecting the mouse click
function handleClick() {
    var clck = this.innerText;
    makeSound(clck);
    buttonAnimation(clck);
}

function makeSound(key){
    switch (key) {
        case "d":
            var dodge = new Audio('sounds/srt.mp3');
            dodge.play();
            break;
        case "f":
            var italia = new Audio('sounds/italia.mp3');
            italia.play();
            break;
        case "g":
            var gt = new Audio('sounds/gt.mp3');
            gt.play();
            break;
        case "s":
            var shelby = new Audio('sounds/shelby.mp3');
            shelby.play();
            break;
        case "a":
            var aventador = new Audio('sounds/aventador.mp3');
            aventador.play();
            break;
        case "h":
            var huracan = new Audio('sounds/huracan.mp3');
            huracan.play();
            break;
        default:
            break;
    }
}
function buttonAnimation(currentKey){
    var activebtn = document.querySelector("." + currentKey);
    activebtn.classList.add("pressed");

    setTimeout(function(){
        activebtn.classList.remove("pressed");
    }, 6000);
}