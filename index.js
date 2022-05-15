// переделала 10 вопрос из предыдущей недели
const name1 = prompt(`Как тебя зовут?`);
const name2 = document.querySelector('.hello_you').innerHTML = (`Привет, ${name1}!`);

const hi = () => name2;
console.log(hi());

// смена темы
function changeTheme(){
    select.onchange = changeTheme;
    switch(document.getElementById("select").value)
    {
    case "dark": document.getElementById("theme").className = "theme_dark";
        break;
    case "dark-blue": document.getElementById("theme").className = "theme_dark-blue";
        break;
    case "white": document.getElementById("theme").className = "theme_white";
        break;
    }
    /* --вариант с if--
    if(document.getElementById("select").value == "dark")
    document.getElementById("theme").className = "theme_dark";
    if(document.getElementById("select").value == "dark-blue") 
    document.getElementById("theme").className = "theme_dark-blue";
    if(document.getElementById("select").value == "white") 
    document.getElementById("theme").className = "theme_white";
    */
    }

changeTheme();

// калькулятор
function sum() {
    const a = document.getElementById('first').value;
    const b = document.getElementById('second').value;
    const result = +a + +b;
    document.getElementById('answer').innerHTML = result; 
    console.log(result);
}

function sub() {
    const a = document.getElementById('first').value;
    const b = document.getElementById('second').value;
    const result = a - b;
    document.getElementById('answer').innerHTML = result;
}

function multi() {
    const a = document.getElementById('first').value;
    const b = document.getElementById('second').value;
    const result = a * b;
    document.getElementById('answer').innerHTML = result;
}

function divied() {
    const a = document.getElementById('first').value;
    const b = document.getElementById('second').value;
    const result = a / b;
    function notDiviedNull(){
        if( b == '0') {
            document.getElementById('answer').innerHTML = `На ноль делить нельзя!`;
        }
        else {
            document.getElementById('answer').innerHTML = result;
        }
    } 
    notDiviedNull("Ответ: ");
}

// смена цвета бэкграунда у блоков
const changeColorGreen = function (sender) {
    sender.classList.toggle("div_1");
}

const changeColorYellow = function (sender) {
    sender.classList.toggle("div_2");
}

const changeColorPurple = function (sender) {
    sender.classList.toggle("div_3");
}

// галерея с изображениями
const butt_prev = document.querySelector('#carusel .carusel_buttons .prev');
const butt_next = document.querySelector('#carusel .carusel_buttons .next');

const images = document.querySelectorAll('#carusel .carusel_items img');
let img = 0;
butt_next.onclick = function() {
    images[img].style.display = 'none';
    img++;
    if(img >= images.length) {
    img = 0;
    }
    images[img].style.display = 'block';
}

butt_prev.onclick = function() {
    images[img].style.display = 'none';
    img = img - 1;
    if(img < 0) {
        img = images.length - 1;
    }
    images[img].style.display = 'block';
}