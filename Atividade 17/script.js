maisc = document.querySelector('#maisc');
minusc = document.querySelector('#minusc');
contentInput = document.querySelector('#content');

function change(){
    let content = contentInput.value;

    if(maisc.checked){
    content = content.toUpperCase();
    }else if(minusc.checked){
        content = content.toLowerCase();
    }
    contentInput.value = content;
    
}

maisc.addEventListener('change', change);
minusc.addEventListener('change', change);
contentInput.addEventListener('input', change);