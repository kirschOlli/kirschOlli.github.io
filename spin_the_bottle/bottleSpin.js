let btnSpin = document.getElementById("spin");
let btnAddPlayer = document.getElementById("add-player");
let textStatus = document.getElementById("status");

const arrayOfPlayer = [];

btnAddPlayer.addEventListener("click", function () {
    let input = document.querySelector('#player-name');
        if (arrayOfPlayer.includes(input.value)) {
            textStatus.textContent = "Player already exists";

        }else {

            let list = document.querySelector('#players');

            let item = document.createElement("li");
            let itemText = document.createTextNode(input.value);

            item.appendChild(itemText);
            list.appendChild(item);

            arrayOfPlayer.push(input.value);

            input.value = "";

            changeStatusText();
        }
})

function changeStatusText() {
    if (arrayOfPlayer.length > 0) {
        textStatus.textContent = ("Spin the bottle!");
    }
}

function choosePlayer() {
    return chosenPlayer = arrayOfPlayer[Math.floor(Math.random() * arrayOfPlayer.length)];
}

btnSpin.addEventListener("click", function () {
    textStatus.textContent = "Spinning...";
    var delayinMs = 1000;
    setTimeout(function () {
        textStatus.textContent = "Selected player:" + choosePlayer();
    }, delayinMs);
})

