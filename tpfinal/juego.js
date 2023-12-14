class Mosca {

  //obstáculos DC
  constructor() {
    this.obstaculo = new Obstaculo();
    this.aprete = false;
    this.Oleadas = 0;
    this.pos_M_X = 300;
    this.pos_M_Y = 500;
    this.cantidadDeObstaculos = 20;
    this.mosca = [];
    this.perdiste = false;
    this.ganaste = false;


    this.mosca[0] = loadImage("img/Mosca1.png");
    this.mosca[1] = loadImage("img/Mosca2.png");
    this.mosca[2] = loadImage("img/Mosca3.png");
    this.mosca[3] = loadImage("img/Mosca_4.png");

    this.imgs= 0 ;
  }

  dibujar() {


    this.Oleadas = this.obstaculo.oleadas;

    this.imgs= (this.imgs + 1) % this.mosca.length;
    this.dibujarObstaculos();
    this.juego();

    text("Oleadas:", 420, 98 );
    text(this.Oleadas, 550, 100 );
  }

  juego() {


    push();
    imageMode(CENTER);
    image(this.mosca[this.imgs], this.pos_M_X, this.pos_M_Y, 80, 80);
    pop();

    if (this.pos_M_X <= 0 ) {
      this.pos_M_X = 580;
    } else if ( this.pos_M_X >= 600) {
      this.pos_M_X = 3;
    }

    if (keyCode === LEFT_ARROW && this.aprete === true) {
      this.pos_M_X-=8;
      this.aprete = false;
    } else if (keyCode === RIGHT_ARROW && this.aprete === true) {
      this.pos_M_X+=8;
      this.aprete = false;
    } else if (keyCode === RIGHT_ARROW && this.aprete === false || keyCode === LEFT_ARROW && this.aprete === false) {
      this.aprete =true;
    }

    if ( this.obstaculo.x <= this.pos_M_X+40 && this.obstaculo.x >= this.pos_M_X-40  && this.obstaculo.y <= this.pos_M_Y && this.obstaculo.y >= this.pos_M_Y-80 ) {
      this.perdiste=true;
    }

    if (this.Oleadas >= 11) {
      this.ganaste = true;
    }
  }

  reiniciar() {
    this.perdiste = false;
    this.ganaste = false;
    this.pos_M_X = 300;
    this.pos_M_Y = 500;
    this.Oleadas = 0;
    this.obstaculo. reiniciarOleada();
    this.obstaculo.reiniciar();
  }

  dibujarObstaculos() {
    for (var i = 0; i < this.cantidadDeObstaculos; i++) {
      this.obstaculo.dibujar();
    }
  }
}
