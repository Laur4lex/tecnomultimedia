let fondos;
let obstaculo;
let mosca;

function setup() {
  estados = new Pantallas();
  createCanvas(600, 600)
}


function draw() {
  estados.dibujar();
}

function keyTyped() {

  if (key === 'r') {
    mosca.reiniciar();
    estados.reiniciar_();
  } else if (key === 'c') {
    mosca.reiniciar();
    estados.Creditos();
  }
}
