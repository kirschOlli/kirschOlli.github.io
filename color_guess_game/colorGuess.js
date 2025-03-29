let rgbColor = document.querySelector("#rgb-color");
let status = document.querySelector("#status");
let restart = document.querySelector("#restart");
let rgbString = "";

let div1 = document.getElementById("cB1");
let div2 = document.getElementById("cB2");
let div3 = document.getElementById("cB3");
let div4 = document.getElementById("cB4");
let div5 = document.getElementById("cB5");
let div6 = document.getElementById("cB6");

div1.style.backgroundColor = "rgb(" + rgbTextShuffle() + ")";
div2.style.backgroundColor = "rgb(" + rgbTextShuffle() + ")";
div3.style.backgroundColor = "rgb(" + rgbTextShuffle() + ")";
div4.style.backgroundColor = "rgb(" + rgbTextShuffle() + ")";
div5.style.backgroundColor = "rgb(" + rgbTextShuffle() + ")";
div6.style.backgroundColor = "rgb(" + rgbTextShuffle() + ")";

divBackgroundColorArray = [
    div1.style.backgroundColor,
    div2.style.backgroundColor,
    div3.style.backgroundColor,
    div4.style.backgroundColor,
    div5.style.backgroundColor,
    div6.style.backgroundColor
]

console.log(divBackgroundColorArray);

div1.addEventListener("click", function () {
        if(div1.style.backgroundColor === rgbColor.textContent){
            status.textContent = "Correct!";
        } else {
            div1.style = "display:none"
            status.textContent = "Try Again!"
        }
})
div2.addEventListener("click", function () {
    if(div2.style.backgroundColor === rgbColor.textContent){
        status.textContent = "Correct!";
    } else {
        div2.style = "display:none"
        status.textContent = "Try Again!"
    }
})
div3.addEventListener("click", function () {
    if(div3.style.backgroundColor === rgbColor.textContent){
        status.textContent = "Correct!";
    } else {
        div3.style = "display:none"
        status.textContent = "Try Again!"
    }
})
div4.addEventListener("click", function () {
    if(div4.style.backgroundColor === rgbColor.textContent){
        status.textContent = "Correct!";
    } else {
        div4.style = "display:none"
        status.textContent = "Try Again!"
    }
})
div5.addEventListener("click", function () {
    if(div5.style.backgroundColor === rgbColor.textContent){
        status.textContent = "Correct!";
    } else {
        div5.style = "display:none"
        status.textContent = "Try Again!"
    }
})
div6.addEventListener("click", function () {
    if(div6.style.backgroundColor === rgbColor.textContent){
        status.textContent = "Correct!";
    } else {
        div6.style = "display:none"
        status.textContent = "Try Again!"
    }
})

restart.addEventListener("click", function () {
    status.textContent = "Start Guessing!"; // Status zurücksetzen

    // Neue Farben für die Divs setzen
    div1.style.backgroundColor = "rgb(" + rgbTextShuffle() + ")";
    div2.style.backgroundColor = "rgb(" + rgbTextShuffle() + ")";
    div3.style.backgroundColor = "rgb(" + rgbTextShuffle() + ")";
    div4.style.backgroundColor = "rgb(" + rgbTextShuffle() + ")";
    div5.style.backgroundColor = "rgb(" + rgbTextShuffle() + ")";
    div6.style.backgroundColor = "rgb(" + rgbTextShuffle() + ")";

    // Alle versteckten Divs wieder anzeigen
    div1.style.display = "inline-block";
    div2.style.display = "inline-block";
    div3.style.display = "inline-block";
    div4.style.display = "inline-block";
    div5.style.display = "inline-block";
    div6.style.display = "inline-block";

    // Neues Ziel-RGB setzen
    rgbColor.textContent = div6.style.backgroundColor;
});




function rgbTextShuffle() {
    rgbString = "";
    rgbString += (Math.floor(Math.random() * 256)) + ", ";
    rgbString += (Math.floor(Math.random() * 256)) + ", ";
    rgbString += (Math.floor(Math.random() * 256));
    rgbColor.textContent = "rgb(" + rgbString + ")";
    return rgbString;
}





