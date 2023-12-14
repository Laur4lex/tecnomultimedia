
function setup() {
  createCanvas(600, 600);

  cuento = new Cuento();
}




function draw() {
  cuento.dibujar();
}

function keyPressed() {
  if (cuento.reiniciar == true) {
    if (keyPressed && key=='r') {
      cuento.pantallas = -1;
    } else if (keyPressed && key=='c') {
      cuento.pantallas = 40;
    }
  }
}
function mousePressed() {

  if (cuento.pantallas>=0 && cuento.camino == 0) {
    cuento.pantallas++;
  }
}
