const text = document.getElementById("text").textContent;
const textfeld = document.getElementById("text");
const btnUpperCase = document.getElementById("uppercase");
const btnLowerCase = document.getElementById("lowercase");
const btnProperCase = document.getElementById("propercase");
const btnSentencCase = document.getElementById("sentencecase");
const btnSave = document.getElementById("save-text-file");
let upperCaseText = "";
let lowerCaseText = "";
let properCaseText = "";
let sentenceCaseText = "";

function makeTextUpperCase() {
    upperCaseText = text.toUpperCase();
    textfeld.innerText = upperCaseText;
}

function makeTextLowerCase() {
    lowerCaseText = text.toLowerCase();
    textfeld.innerText = lowerCaseText;
}

function makeTextProperCase() {
    var str = text.toLowerCase().split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
    }
    properCaseText = str.join(" ");
    textfeld.innerText = properCaseText;
}

function makeTextSentenceCase() {
    var str = text.toLowerCase().split(". ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
    }
    sentenceCaseText = str.join(". ");
    textfeld.innerText = sentenceCaseText;
}

function download(filename, text) {
    let element = document.createElement("a");
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}


btnUpperCase.addEventListener("click", makeTextUpperCase);
btnLowerCase.addEventListener("click", makeTextLowerCase);
btnProperCase.addEventListener("click", makeTextProperCase);
btnSentencCase.addEventListener("click", makeTextSentenceCase);
btnSave.addEventListener("click", function(){
    let downloadText = document.getElementById("text").value;
    download("caseConverter.txt", downloadText);
});