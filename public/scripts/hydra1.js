/* global Hydra */
/* global osc */

const canvas = document.getElementById("hydraCanvas");

canvas.width = 1024;
canvas.height = 1024;

// create a new hydra-synth instance
var hydra = new Hydra({
  canvas,
  detectAudio: false,
  enableStreamCapture: false,
})


var k = 4;
let a = 0.8;


function fadeOut(callback) {
  const id = setInterval(frame, 10);
  function frame() {
    if (a<=0) {
      clearInterval(id);
      callback();
    } else {
      a -= 0.01;
      console.log('a=',a);
    }
  }
  
}

function hide() {
  document.getElementById('hydraCanvas').style.visibility = 'hidden';
  document.getElementById('iphoneCanvas').style.visibility = 'hidden';
  document.getElementById('buttons').style.visibility = 'hidden';
  document.getElementById('continue').style.visibility = 'hidden';
}

hydraCanvas = document.createElement('canvas')
ctx = hydraCanvas.getContext('2d')
ctx.font = "18px Arial"
ctx.fillStyle = "white";
ctx.fillText("Today you can learn the secret.....", 10, 50)

s0.init({ src: hydraCanvas, dynamic: false })

src(s0).diff (

    osc(6,0.1,1.5)
    .color(0,0.5,1)
    .modulate(noise(7).kaleid(50))
    .pixelate(256,256)
    .modulateKaleid(osc(2,0.05,0), ()=>k)
    .brightness(() => (Math.sin(time)+1.5)/3 )
    .color(1,1,1, () => a)

  .scale(1,()=>window.innerHeight/window.innerWidth)

)
  .out()
