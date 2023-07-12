for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        keyclicked = this.innerHTML;
        soundPodu(keyclicked);
        buttonAnimation(keyclicked);
    });
}

document.addEventListener("keydown", function(event){
    soundPodu(event.key);
    buttonAnimation(event.key);
});

function soundPodu(keyclicked){
    if (keyclicked == "w"){
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
    } else if (keyclicked == "a") {
        var audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
    } else if (keyclicked == "s"){
        var audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
    } else if (keyclicked == "d") {
        var audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
    } else if (keyclicked == "j"){
        var audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
    } else if (keyclicked == "k") {
        var audio = new Audio("./sounds/snare.mp3");
        audio.play();
    } else if (keyclicked == "l"){
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
    }
}

function buttonAnimation(currentKey){
    var triggered = document.querySelector("." + currentKey);
    triggered.classList.add("pressed");

    setTimeout(function(){
        triggered.classList.remove("pressed");
    }, 100);
}