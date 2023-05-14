// Make the DIV element draggable:

//vars for checking if pedals are in place
var p1ip = false
var p2ip = false
var p3ip = false
var p4ip = false
var p5ip = false

//vars for checking if slots have pedals




const divs = document.querySelectorAll('.pedal');

divs.forEach(el => dragElement(el));

var detectOverlap = (function () {
  function getPositions(elem) {
      var pos = elem.getBoundingClientRect();
      return [[pos.left, pos.right], [pos.top, pos.bottom]];
  }

  function comparePositions(p1, p2) {
      var r1, r2;
      r1 = p1[0] < p2[0] ? p1 : p2;
      r2 = p1[0] < p2[0] ? p2 : p1;
      return r1[1] > r2[0] || r1[0] === r2[0];
  }

  return function (a, b) {
      var pos1 = getPositions(a),
          pos2 = getPositions(b);
      return comparePositions(pos1[0], pos2[0]) && comparePositions(pos1[1], pos2[1]);
  };
})();


function checkCollision1() {
  var slots = [];
  slots = document.getElementsByClassName("slot");
  var elem1 = document.getElementById("pedal1")
  var elemList = Array.prototype.slice.call(slots);
  for(var i = 0; i< slots.length; i++)
  {
    if (detectOverlap(elem1, elemList[i])) {
        if(elemList[i].classList.contains("empty")){
          if(!p1ip){
            console.log("pedal online")          
            p1ip = true;
            elem1.onmousedown = null
            elemList[i].classList.remove("empty")
            elemList[i].getElementsByTagName('img')[0].src = elem1.getElementsByTagName('img')[0].src
            elem1.remove()
          }
        }

    } else 
    {
        
    }
  }
   setTimeout("checkCollision1();", 10);
}

function checkCollision2() {
  var slots = [];
  slots = document.getElementsByClassName("slot");
  var elem1 = document.getElementById("pedal2")
  var elemList = Array.prototype.slice.call(slots);
  for(var i = 0; i< slots.length; i++)
  {
    if (detectOverlap(elem1, elemList[i])) {
      if(elemList[i].classList.contains("empty")){
        if(!p2ip){
          console.log("pedal online")          
          p2ip = true;
          elem1.onmousedown = null
          elemList[i].classList.remove("empty")
          elemList[i].getElementsByTagName('img')[0].src = elem1.getElementsByTagName('img')[0].src
          elem1.remove()

        }
      }

  } else 
  {
      
  }
  }
   setTimeout("checkCollision2();", 10);
}

function checkCollision3() {
  var slots = [];
  slots = document.getElementsByClassName("slot");
  var elem1 = document.getElementById("pedal3")
  var elemList = Array.prototype.slice.call(slots);
  for(var i = 0; i< slots.length; i++)
  {
    if (detectOverlap(elem1, elemList[i])) {
      if(elemList[i].classList.contains("empty")){
        if(!p3ip){
          console.log("pedal online")          
          p3ip = true;
          elem1.onmousedown = null
          elemList[i].classList.remove("empty")
          elemList[i].getElementsByTagName('img')[0].src = elem1.getElementsByTagName('img')[0].src
          elem1.remove()

        }
      }

  } else 
  {
      
  }
  }
   setTimeout("checkCollision3();", 10);
}
function checkCollision4() {
  var slots = [];
  slots = document.getElementsByClassName("slot");
  var elem1 = document.getElementById("pedal4")
  var elemList = Array.prototype.slice.call(slots);
  for(var i = 0; i< slots.length; i++)
  {
    if (detectOverlap(elem1, elemList[i])) {
      if(elemList[i].classList.contains("empty")){
        if(!p4ip){
          console.log("pedal online")          
          p4ip = true;
          elem1.onmousedown = null
          elemList[i].classList.remove("empty")
          elemList[i].getElementsByTagName('img')[0].src = elem1.getElementsByTagName('img')[0].src
          elem1.remove()

        }
      }

  } else 
  {
      
  }
  }
   setTimeout("checkCollision4();", 10);
}
function checkCollision5() {
  var slots = [];
  slots = document.getElementsByClassName("slot");
  var elem1 = document.getElementById("pedal5")
  var elemList = Array.prototype.slice.call(slots);
  for(var i = 0; i< slots.length; i++)
  {
    if (detectOverlap(elem1, elemList[i])) {
      if(elemList[i].classList.contains("empty")){
        if(!p5ip){
          console.log("pedal online")          
          p5ip = true;
          elem1.onmousedown = null
          elemList[i].classList.remove("empty")
          elemList[i].getElementsByTagName('img')[0].src = elem1.getElementsByTagName('img')[0].src
          elem1.remove()

        }
      }

  } else 
  {
      
  }
  }
   setTimeout("checkCollision5();", 10);
}


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



checkCollision1()
checkCollision2()
checkCollision3()
checkCollision4()
checkCollision5()