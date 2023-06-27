
function myadd(){
    let text0 = document.getElementById('txt0').value;
    let text1 = document.getElementById('txt1').value;
    let text = document.getElementById('odd-even');

    const result = (parseInt(text0) + parseInt(text1)) ;
    text.textContent = result;
}

function mysub(){
    let text0 = document.getElementById('txt0').value;
    let text1 = document.getElementById('txt1').value;
    let text = document.getElementById('odd-even');

    const result = (parseInt(text0) - parseInt(text1)) ;
    text.textContent = result;
}

function mydiv(){
    let text0 = document.getElementById('txt0').value;
    let text1 = document.getElementById('txt1').value;
    let text = document.getElementById('odd-even');

    const result = (parseInt(text0) / parseInt(text1)) ;
    text.textContent = result;
}

function mymul(){
    let text0 = document.getElementById('txt0').value;
    let text1 = document.getElementById('txt1').value;
    let text = document.getElementById('odd-even');

    const result = (parseInt(text0) * parseInt(text1)) ;
    text.textContent = result;
}