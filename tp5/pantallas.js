class Pantallas {

  constructor() {
    this.estado = 1 ;

    fondos = new Fondos();
    obstaculo = new Obstaculo();
    mosca = new Mosca();
  }

  dibujar() {

    if (this.estado == 1) {
      background(255);
      fondos.F_Inicio();
      push();
      textSize(28);
      fill(255, 0, 0);
      text("LA CRUELDAD DE INGER", 5, 80);
      pop();
      textSize(30);
      fill(255);
      text("Presiona ''ENTER'' para empezar", 70, 500);
    }


    if (this.estado == 2) {
      background(255)
        fondos.F_Juego();
      mosca.dibujar();
    }

    if (this.estado === 1 && keyCode === ENTER) {
      this.estado = 2;
    }
  }
  perdiste() {
    this.estado = 3;
    background(255)
      fondos.F_Perdiste();
    textSize(40);
    text("¡Fuiste Cazado!", 150, 340);
    textSize(30);
    text("Sobreviviste:", 150, 50);
    text(mosca.oleadas+"  Oleadas", 330, 50);
    text("Presiona R para reiniciar", 250, 530);
    text("Presiona C para creditos", 250, 580);
  }

  Creditos() {
    this.estado = 4;
    background(255)
      fill(0);
    fondos.Creditos();
    text("Realizado por: \nLaura Ocampo", 20, 250);
    text("Presiona R para reiniciar", 20, 460);
  }

  reiniciar_() {
    mosca.reiniciar();
    mosca.oleadas = 0;
    this.estado = 1;
  }
}
