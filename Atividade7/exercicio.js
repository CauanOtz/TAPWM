var userValue = document.querySelector('#userValue');
var userChoose;
var randomValue = document.querySelector('#randomValue');
var papel = document.querySelector('#papel');
var tesoura = document.querySelector('#tesoura');
var pedra = document.querySelector('#pedra');
var randomValueRes;
var iniciar = document.querySelector('#iniciar');
var res = document.querySelector('.res');

pedra.addEventListener('click', function(){
    userChoose = 1;    
    userValue.value="pedra";
})

tesoura.addEventListener('click', function(){
    userChoose = 2;
    userValue.value="tesoura";
})

papel.addEventListener('click', function(){
    userChoose = 3;
    userValue.value="papel";
})



 iniciar.addEventListener('click', function(){

    randomValueRes = Math.floor(Math.random() * 3) + 1;

    if(userChoose == 1 && randomValueRes == 3 || userChoose == 2 && randomValueRes == 1 || userChoose == 3 && randomValueRes == 2){
        res.innerHTML=`A máquina venceu`;
    }else if(userChoose == 3 && randomValueRes == 1 || userChoose == 1 && randomValueRes == 2 || userChoose == 2 && randomValueRes == 3){
        res.innerHTML=`o Usuário Venceu`;
    }else {
        res.innerHTML=`Empate`;
    }

    randomValue.value=`${randomValueRes}`;
 })
