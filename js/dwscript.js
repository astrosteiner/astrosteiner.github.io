let currentlyPlaying = true;
let object = document.getElementById('window');
let bubble = document.getElementById("left");
let bubble2 = document.getElementById("right");
let bubble3 = document.getElementById("right3");
let bubble4 = document.getElementById("right4");
let bubble5 = document.getElementById("mid5");
let bubble6 = document.getElementById("mid6");
let bubble7 = document.getElementById("mid7");
let bubble8 = document.getElementById("left8");
var slider = document.getElementById("slider");
var output = document.getElementById("demo");
let clicker = document.getElementById('clicker');
let clicker2 = document.getElementById('clicker2');
let clicker3 = document.getElementById('clicker3');
let clicker4 = document.getElementById('clicker4');
let clicker5 = document.getElementById('clicker5');
let clicker6 = document.getElementById('clicker6');
let clicker7 = document.getElementById('clicker7');
let clicker8 = document.getElementById('clicker8');
bubble.style.display = "none";
bubble2.style.display = "none";
bubble3.style.display = "none";
bubble4.style.display = "none";
bubble5.style.display = "none";
bubble6.style.display = "none";
bubble7.style.display = "none";
bubble8.style.display = "none";


//restart
var restart = document.getElementById("restart");
restart.onclick = function() {
  object.className = "image4";
  slider.value = '.01';
  demo.value = '.01';
  bubble.style.display = "none";
  bubble2.style.display = "none";
  bubble3.style.display = "none";
  bubble4.style.display = "none";
  bubble5.style.display = "none";
  bubble6.style.display = "none";
  bubble7.style.display = "none";
  bubble8.style.display = "none";

  object.className = "window2";

}
//bubble
clicker.onclick = function() {
  if (bubble.style.display === "none") {
    bubble.style.display = "block";
    bubble2.style.display = "none";
    bubble3.style.display = "none";
    bubble4.style.display = "none";
    bubble5.style.display = "none";
    bubble6.style.display = "none";
    bubble7.style.display = "none";
    bubble8.style.display = "none";


  } else {
    bubble.style.display = "none";
  }
}

//bubble2
clicker2.onclick = function() {
  if (bubble2.style.display === "none") {
    bubble2.style.display = "block";
    bubble.style.display = "none";
    bubble3.style.display = "none";
    bubble4.style.display = "none";
    bubble5.style.display = "none";
    bubble6.style.display = "none";
    bubble7.style.display = "none";
    bubble8.style.display = "none";


  } 
  else {
    bubble2.style.display = "none";
  }
}

//bubble3
clicker3.onclick = function() {
  if (bubble3.style.display === "none") {
    bubble3.style.display = "block";
    bubble.style.display = "none";
    bubble2.style.display = "none";
    bubble4.style.display = "none";
    bubble5.style.display = "none";
    bubble6.style.display = "none";
    bubble7.style.display = "none";
    bubble8.style.display = "none";


  } 
  else {
    bubble3.style.display = "none";
  }
}

//bubble4
clicker4.onclick = function() {
  if (bubble4.style.display === "none") {
    bubble4.style.display = "block";
    bubble.style.display = "none";
    bubble2.style.display = "none";
    bubble3.style.display = "none";
    bubble5.style.display = "none";
    bubble6.style.display = "none";
    bubble7.style.display = "none";
    bubble8.style.display = "none";


  } 
  else {
    bubble4.style.display = "none";
  }
}

//bubble5
clicker5.onclick = function() {
  if (bubble5.style.display === "none") {
    bubble5.style.display = "block";
    bubble.style.display = "none";
    bubble2.style.display = "none";
    bubble4.style.display = "none";
    bubble3.style.display = "none";
    bubble7.style.display = "none";
    bubble8.style.display = "none";

  } 
  else {
    bubble5.style.display = "none";
  }
}

//bubble6
clicker6.onclick = function() {
  if (bubble6.style.display === "none") {
    bubble6.style.display = "block";
    bubble.style.display = "none";
    bubble2.style.display = "none";
    bubble4.style.display = "none";
    bubble3.style.display = "none";
    bubble5.style.display = "none";
    bubble7.style.display = "none";
    bubble8.style.display = "none";


  } 
  else {
    bubble6.style.display = "none";
  }
}

//bubble7
clicker7.onclick = function() {
  if (bubble7.style.display === "none") {
    bubble7.style.display = "block";
    bubble.style.display = "none";
    bubble2.style.display = "none";
    bubble4.style.display = "none";
    bubble3.style.display = "none";
    bubble5.style.display = "none";
    bubble6.style.display = "none";
    bubble8.style.display = "none";

  } 
  else {
    bubble7.style.display = "none";
  }
}

//bubble8
clicker8.onclick = function() {
  if (bubble8.style.display === "none") {
    bubble8.style.display = "block";
    bubble.style.display = "none";
    bubble2.style.display = "none";
    bubble4.style.display = "none";
    bubble3.style.display = "none";
    bubble5.style.display = "none";
    bubble6.style.display = "none";
    bubble7.style.display = "none";

    
  } 
  else {
    bubble8.style.display = "none";
  }
}


//slider
var slider = document.getElementById("slider");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 
slider.oninput = function() {
  output.innerHTML = this.value;
  if (slider.value < '1.5') {
    object.className = "window2";
    //object.classList.toggle('fade2');
  } 
  //else if (slider.value > '2') {
    //object.className = "window3";
    //object.classList.toggle('fade3');
  //}
  else {
    object.className = "window3";
    //object.classList.toggle('fade');
    
  }
}

