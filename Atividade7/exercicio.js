var userChoose;
var userValue = document.querySelector('#userValue');
var randomValue = document.querySelector('#randomValue');
var papel = document.querySelector('#papel');
var tesoura = document.querySelector('#tesoura');
var pedra = document.querySelector('#pedra');
var iniciar = document.querySelector('#iniciar');
var res = document.querySelector('.res');

var choicesRandom = {
    1: { name: "pedra", image: "pedra.jpg" },
    2: { name: "tesoura", image: "tesoura.jpg" },
    3: { name: "papel", image: "papel.jpg" }
};

pedra.addEventListener('click', function(){
    setUserChoice(1, "pedra");
});

tesoura.addEventListener('click', function(){
    setUserChoice(2, "tesoura");
});

papel.addEventListener('click', function(){
    setUserChoice(3, "papel");
});

function setUserChoice(choice, userChoice) {
    userChoose = choice;
    userValue.innerHTML = `<img src="${userChoice}.jpg" alt="${userChoice}">`;
}

iniciar.addEventListener('click', function(){
    var randomValueRes = Math.floor(Math.random() * 3) + 1;
    var machineChoice = choicesRandom[randomValueRes];
    var resultMessage;

    if (userChoose == randomValueRes) {
        resultMessage = "Empate";
    } else if ((userChoose == 1 && randomValueRes == 3) || (userChoose == 2 && randomValueRes == 1) || (userChoose == 3 && randomValueRes == 2)) {
        resultMessage = "A máquina venceu";
    } else {
        resultMessage = "O Usuário Venceu";
    }

    res.innerHTML = resultMessage;
    randomValue.innerHTML = `<img src="${machineChoice.image}" alt="${machineChoice.name}">`;
});
