class Pantallas {
  //Estados del juego
  constructor() {
    //objeto
    this.estado = 1 ;
    this.fondos = new Fondos();
    this.mosca = new Mosca();
    this.ganaste_ = false;
  }

  dibujar() { //Método



    if (this.estado == 1) {
      background(255);
      this.fondos.F_Inicio();
      push();
      textSize(28);
      fill(255, 0, 0);
      text("LA CRUELDAD DE INGER", 5, 80);
      pop();
      textSize(30);
      fill(255);
      text("Presiona ''ENTER'' para empezar", 70, 500);
    }

    if (this.mosca.ganaste == true) {
      this.ganaste();
    }
    if (this.estado == 2) {
      background(255)
        this.fondos.F_Juego();
      this.mosca.dibujar();
    }

    if (this.estado === 1 && keyCode === ENTER) {
      this.estado = 2;
    }
    if (this.mosca.perdiste == true) {
      this.perdiste();
    }
  }
  perdiste() {
    this.estado = 3;

    background(255)
      this.fondos.F_Perdiste();
    textSize(40);
    text("¡Fuiste Cazado!", 150, 340);
    textSize(30);
    text("Sobreviviste", 150, 50);
    text(this.mosca.Oleadas+"  Oleadas", 330, 50);
    text("Presiona R para reiniciar", 250, 530);
    text("Presiona C para continuar", 250, 480);
  }

  ganaste() {
    this.estado = 4;
    this.ganaste_ = true;
    background(255)
      this.fondos.F_Perdiste();
    textSize(40);
    text("¡Ganaste!", 150, 340);
    textSize(30);
    text("Sobreviviste", 150, 50);
    text(this.mosca.Oleadas-1+"  Oleadas", 330, 50);
    text("Presiona R para reiniciar", 250, 530);
    text("Presiona C para continuar", 250, 480);
  }


  reiniciar_() {
    this.mosca.reiniciar();
    this.mosca.oleadas = 0;
    this.estado = 1;
  }
}
