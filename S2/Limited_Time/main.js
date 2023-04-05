// ------------------------Timer Step1-----------------------------

let pass = "DoYouKnowThePassword?";
let secondes;
let microsecondes;
let verif;
let flag;

function timer(pass) {

    let recup = "";

    for (i = 0; i < pass.length; i++) {
        if (i == pass.length - 1) {
            recup = recup + pass.charCodeAt(i);
        } else {
            recup = recup + pass.charCodeAt(i) + ",";
        }
    }

    pass = "String.fromCharCode(" + recup + ")";
    pass = 'decodeURI("' + pass + '")';
    pass = pass.replace('(69', "%2869").replace('101)', "101%29");

    if (pass == atob("ZGVjb2RlVVJJKCJTdHJpbmcuZnJvbUNoYXJDb2RlJTI4NjksMTIwLDExNiwxMDEsMTEwLDEwMCw4NCwxMDQsMTAxLDg0LDEwNSwxMDksMTAxJTI5Iik=")) {

        //Stop the time
        document.getElementById("Step1").value = pass;

        return true;

    } else {

        return false;
    }
}

clock = timer(pass);

// -----------------------------------------------------
const timerElement = document.getElementById("timer");
setInterval(() => {
    if (clock == true) {
        secondes = 10;
        microsecondes = 10;
    }
    if (typeof secondes == 'undefined' && typeof microsecondes == 'undefined') {
        secondes = 10;
        microsecondes = 0;
    }
    if (timer(pass) == false && verif < secondes) {
        secondes = verif;
    }
    if (timer(pass) == false && verif > secondes) {
        verif = secondes;
    }
    if (timer(pass) == false && secondes <= 10) {
        verif = secondes;
        verif2 = microsecondes;
    }
    if (timer(pass) == false && secondes > 10) {
        secondes = verif - 1;
        microsecondes = verif2;
    }
}, 10)

setInterval(() => {
    secondes = secondes < 10 && secondes[0] != "0" ? "0" + secondes : secondes
    microsecondes = microsecondes < 10 ? "0" + microsecondes : microsecondes

    timerElement.innerText = `${secondes}:${microsecondes}`
    microsecondes = microsecondes <= 0 ? 0 : microsecondes - 1
    if (microsecondes <= 0 & secondes > 0) {
        microsecondes = 99;
        secondes = secondes <= 0 ? 0 : secondes - 1
    }
}, 10)

setInterval(() => {
    if (secondes <= 0 && microsecondes <= 00) {
      window.location.href = "script.php";
    }
}, 1000)

// ------------------------progressBar-----------------------------
let nb = 0
let on
let barstep = 0
const progressBar = document.getElementsByClassName('progress-bar')[0]

document.getElementById("switch2").addEventListener("click", function(){
    nb++
    if (nb == 1) {
      on = setInterval( _ => {
        if (progressBar.value < progressBar.max) {
          progressBar.value += 1
          barstep = progressBar.value
        } else {
          clearInterval(on);
        }
      },  50);
    } else {
      clearInterval(on);
      nb = 0
    }
})

setInterval(() => {
  if (progressBar.value > barstep+2) {
    progressBar.value = 0
  } else if (progressBar.max != 200) {
    progressBar.max = 200;
  }
},  10);

// ------------------------digicode Step2-----------------------------
pass = 2580;
window.pass = parseInt(pass.toString().split('').reverse().join(''), 10);
valid = false;

document.addEventListener('DOMContentLoaded', start);

function start(){
  var refreshIntervalId = setInterval(() => {
    if (progressBar.value == progressBar.max) {
      window.tries = 0;

      Array.from(document.getElementsByClassName('key')).forEach(function(item) {
        item.style.color = "green";
      })
        
      document.querySelectorAll('.key').forEach(function(key) {
        key.addEventListener('click', function() {
          if (valid != true) {
            var n = this.innerHTML;
            document.querySelector('.screen').innerHTML += n;
            window.tries++;
            updateFlasher();
            validate();
          }
        });
      });
      clearInterval(refreshIntervalId);
    }
  },  100);
}

function updateFlasher(){
  if (window.tries <=3){
    var dis = window.tries * 55;
    document.querySelector('.flasher').style.left = dis + 'px';
  }
  else{
    document.querySelector('.flasher').style.left = '20px';
    document.querySelector('.flasher').style.display = 'none';
  }
}

function validate(){
  if (window.tries >= 4){
    checkWin();
    document.querySelector('.screen').innerHTML = '';
    window.tries = 0;
    document.querySelector('.flasher').style.display = 'block';
  }
  else{
    
  }
}

function checkWin(){
  var code = document.querySelector('.screen').innerHTML;
  if (code == window.pass){
    document.querySelector('.success').style.display = 'block';

    document.getElementById("Step2").value = code.toString();

    valid = true;
  }
  else{
    document.querySelector('.error').style.display = 'block';
    setTimeout(function() {
      document.querySelector('.error').style.display = 'none';
    }, 1000);
  }
}

// ------------------------cookies Step3-----------------------------
let time;

function creerCookie(DateNow) {
  document.cookie = "CookieWall=admin; expires="+DateNow;
  time = new Date(DateNow);
}

document.getElementById("button").addEventListener("click", function(){

  //date : jour de l'évènement à minuit
  EventDate = new Date("April 1, 2023 00:00:00");

  if (+time === +EventDate) {
    document.getElementById("Step3").value = time;
  }
})

creerCookie(Date.now());

//javascript:clock=timer("");