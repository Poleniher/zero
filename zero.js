// Ejemplo número 1: Este es un comentario

/*
comentario
multilínea
*/

let photo;

function setup() {
 createCanvas(500, 500);
 photo = createCanvas(width, height);
 background(255);
}


function draw() {
  if (mouseIsPressed) {
  line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function keyTyped() {
  if (key === 's' || key === 'S') {
    saveCanvas(photo, 'myCanvas', 'jpg');
  }
}
