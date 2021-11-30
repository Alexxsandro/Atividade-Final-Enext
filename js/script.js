var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,

    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
      
    },
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}




/* Relogio*/
function startTimer(duration, display) {
    var timer = duration,horas, minutes, seconds;
    setInterval(function () {
        horas = parseInt(timer / 60, 10);
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        horas = horas < 10 ? "0" + horas : horas;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = horas + ":" + minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
window.onload = function () {
    var duration = 10 * 10; // Converter para segundos
        display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
};


var num = 1;
var img = document.getElementById("imagemRosa1");
var img1 = document.getElementById("imagemRosa2");
var img2 = document.getElementById("imagemRosa3");
function btncorPreto(){
//apenas para cunho de testes
setTimeout(function () {
  if (num == 1)
    {
      img.src = "../images/iphonePretoFrente.jpg";
      img.style.width = "160px";
      img.style.height = "330px"
      img.style.marginLeft = "100px"
      img1.src = "../images/iphonePreto1.jpg";
      img1.style.width = "270px"
      img1.style.height = "350px"
      img1.style.marginLeft = "40px"
      img1.style.marginTop = "-20px"
      img2.src = "../images/iphonePreto.jpg";
      img2.style.width = "180px"
      img2.style.height = "350px"
      img2.style.marginLeft = "80px"
      img2.style.marginTop = "-20px"

    }
  else if (num == 2)
    {
      img.src = "";
    }
    //garante que num fique alternando entre 1 e 2
    num = (num % 2) + 1;
    }, 1000);
}
var num = 1;
var corRosa = document.getElementById("imagemRosa1");
var corRosa1 = document.getElementById("imagemRosa2");
var corRosa2 = document.getElementById("imagemRosa3");
function btncorRosa1(){
   
//apenas para cunho de testes
setTimeout(function () {
  if (num == 1)
    {
      corRosa.src = "../images/iphoneRosaFrente.jpg";
      corRosa.style.width = "350px";
      corRosa.style.height = "330px"
      corRosa.style.marginLeft = "0px"
      corRosa1.src = "../images/iphoneRosaLado.jpg";
      corRosa1.style.width = "270px"
      corRosa1.style.height = "350px"
      corRosa1.style.marginLeft = "40px"
      corRosa1.style.marginTop = "-20px"
      corRosa2.src = "../images/iphoneRosaParteTraseira.jpg";
      corRosa2.style.width = "350px"
      corRosa2.style.height = "350px"
      corRosa2.style.marginLeft = "-5px"
      corRosa2.style.marginTop = "-20px"

    }
  else if (num == 2)
    {
      img.src = "";
    }
    //garante que num fique alternando entre 1 e 2
    num = (num % 2) + 1;
    }, 1000);
}
function openNav() {
  document.getElementById("mySidebar").style.width = "230px";
  document.getElementById("main").style.marginLeft = "220px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}