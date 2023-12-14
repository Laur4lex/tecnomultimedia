class Cuento {

  constructor() {

    this.camino =0;
    this.opciones = 0;
    this.pantallas = -1;
    this.EsFinal = false;
    this.reiniciar = false;

    this.estados = new Pantallas();

    this.img = new Img();
    this.texto = new Textos();

    this.ganasteJuego = false;
    ellipseMode(RADIUS);
  }

  dibujar() {

    if (this.estados.estado == 3) {
      if (key === 'r') {
        this.estados.reiniciar_();
      } else if (key === 'c') {
        this.estados.reiniciar_();
        this.pantallas = 42;
        this.camino = 0;
      }
    }

    if (this.estados.estado == 4) {
      if (key === 'r') {
        this.estados.reiniciar_();
      } else if (key === 'c') {
        this.estados.reiniciar_();
        this.pantallas = 1;
        this.camino = 0;
      }
    }

 
    if (this.pantallas==42) {
      this.camino = 0;
    }

    fill(255);
    this.camino = 0;
    if (this.puedoAV(false, true) == true) {
      this.camino=1;
    } else if (this.puedoAV(true, false) ==false) {
      this.camino=0;
    }

    if (this.pantallas == -1) {
      this.EsFinal = false;
    this.reiniciar = false;
      this.img.pantalla(29);
      this.botonRosa(500, 80, 50, 0);
      this.texto.pantallas(0, 20, 255, 50, 500);
      this.texto.pantallas(1, 25, 0, 470, 85);
    }

    if (this.pantallas == 0) {
      this.EsFinal = false;
      this.camino=1;
      this.img.pantalla(0);
      this.texto.pantallas(2, 15, 255, 236, 100);
      this.texto.pantallas(3, 15, 255, 336, 300);

      push();
      this.botonRosa(470, 520, 50, 41);
      fill(0);
      textSize(25);
      text("Juego", 437, 520);
      pop();
    }

    //Juego
    if (this.pantallas == 41) {
      this.reiniciar = false;
      this.camino=1;
      this.ganasteJuego = this.estados.ganaste_;
      this.estados.dibujar();
    }

    if (this.pantallas == 42) {

      this.img.pantalla(32);
      this.texto.pantallas(65, 13, 255, 300, 90);
      this.texto.pantallas(66, 13, 255, 300, 340);
    }
    if (this.pantallas == 43) {
      this.img.pantalla(33);
      this.texto.pantallas(67, 15, 255, 20, 140);
      this.texto.pantallas(68, 15, 255, 20, 320);
    }
    if (this.pantallas == 44) {
      this.img.pantalla(34);
      this.texto.pantallas(69, 14, 255, 20, 350);
    }
    if (this.pantallas == 45) {
      this.img.pantalla(35);
      this.texto.pantallas(70, 15, 255, 350, 200);
    }
    if (this.pantallas == 46) {
      this.img.pantalla(7);

      this.camino=1;
      this.boton(140, 400, 50, 47);
      this.boton(460, 400, 50, 50);

      this.texto.pantallas(6, 100, 0, 110, 430);
      this.texto.pantallas(7, 100, 0, 430, 430);

      this.texto.pantallas(71, 20, 0, 40, 480);
      this.texto.pantallas(72, 20, 0, 380, 480);
    }
    if (this.pantallas == 47) {
      this.camino=0;
      this.img.pantalla(36);
      this.texto.pantallas(73, 15, 255, 30, 300);
      this.texto.pantallas(74, 15, 255, 30, 400);
    }
    if (this.pantallas == 48) {
      this.img.pantalla(37);
      this.texto.pantallas(75, 15, 255, 335, 200);
    }
    if (this.pantallas == 50) {
      this.camino=0;
      this.img.pantalla(38);
      this.texto.pantallas(76, 15, 255, 30, 100);
    }
    if (this.pantallas == 51) {
      this.img.pantalla(39);
      this.texto.pantallas(77, 15, 255, 25, 200);
    }

    if (this.pantallas == 52  && mousePressed) {
      this.EsFinal = true;
    }
    if (this.pantallas == 49  && mousePressed) {
      this.EsFinal = true;
    }

    if (this.pantallas == 1) {
      //Acto2

      background(0);
      this.img.pantalla(1);
      this.texto.pantallas(4, 15, 255, 250, 70);
    }

    if (this.pantallas == 2) {
      //Acto3
      this.img.pantalla(2);
      this.texto.pantallas(5, 16, 255, 320, 150);
    }

    if (this.pantallas == 3) {
      //Opciones
      this.img.pantalla(7);

      this.boton(140, 400, 50, 4 );
      this.boton(300, 400, 50, 9);
      this.boton(460, 400, 50, 22);

      this.texto.pantallas(6, 100, 0, 110, 430);
      this.texto.pantallas(7, 100, 0, 270, 430);
      this.texto.pantallas(8, 100, 0, 430, 430);

      this.texto.pantallas(9, 20, 0, 40, 480);
      this.texto.pantallas(10, 20, 0, 250, 480);
      this.texto.pantallas(11, 20, 0, 410, 480);
    }


    //Fingir demencia
    if (this.pantallas == 4) {

      this.img.pantalla(3);
      this.texto.pantallas(12, 14, 255, 20, 20);
      this.texto.pantallas(13, 14, 255, 295, 220);
    }

    if (this.pantallas == 5) {

      this.img.pantalla(4);

      this.texto.pantallas(14, 16, 255, 330, 20);
      this.texto.pantallas(15, 16, 255, 220, 300);
      this.texto.pantallas(16, 16, 255, 20, 500);
    }

    if (this.pantallas == 6) {

      this.img.pantalla(5);

      this.texto.pantallas(17, 16, 255, 270, 50);
    }

    if (this.pantallas == 7  ) {

      this.img.pantalla(6);

      this.texto.pantallas(18, 16, 255, 270, 40);
      this.texto.pantallas(19, 16, 255, 315, 215);
      this.texto.pantallas(20, 16, 255, 200, 430);
    }

    //FIN DE FINGIR DEMENCIA
    if (this.pantallas == 8) {
      this.EsFinal = true;
    }

    //INICIO DE ESCONDERSE
    if (this.pantallas == 9  ) {

      this.img.pantalla(8);

      this.texto.pantallas(21, 18, 255, 30, 50);
      this.texto.pantallas(22, 18, 255, 260, 280);
    }

    if (this.pantallas == 10) {

      this.img.pantalla(9);

      this.texto.pantallas(23, 16, 255, 290, 100);
      this.texto.pantallas(24, 16, 255, 300, 395);
      this.texto.pantallas(25, 16, 255, 30, 515);
    }

    if (this.pantallas == 11) {
      //Opciones

      this.img.pantalla(7);

      this.boton(140, 400, 50, 12 );
      this.boton(460, 400, 50, 16);

      this.texto.pantallas(6, 100, 0, 110, 430);
      this.texto.pantallas(7, 100, 0, 430, 430);

      this.texto.pantallas(26, 20, 0, 90, 480);
      this.texto.pantallas(27, 20, 0, 380, 480);
    }


    //Opciones Trabajar o dama de compania

    //TRABAJAR
    if (this.pantallas == 12  ) {
      this.img.pantalla(10);
      this.texto.pantallas(28, 18, 255, 20, 350);
    }

    if (this.pantallas == 13) {
      this.img.pantalla(11);
      this.texto.pantallas(29, 16, 255, 20, 140);
    }

    if (this.pantallas == 14) {
      this.img.pantalla(12);
      this.texto.pantallas(30, 18, 255, 20, 180);
    }

    //FIN DE TRABAJAR
    if (this.pantallas == 15  && mousePressed) {
      this.EsFinal = true;
    }

    //INICIO DE DAMA DE COMPANIA
    if (this.pantallas == 16) {

      this.img.pantalla(13);
      this.texto.pantallas(31, 18, 255, 30, 100);
    }

    if (this.pantallas == 17) {
      this.img.pantalla(14);
      this.texto.pantallas(32, 18, 255, 270, 130);
      this.texto.pantallas(33, 18, 255, 360, 360);
    }

    if (this.pantallas == 18) {
      this.img.pantalla(15);


      this.texto.pantallas(34, 16, 255, 220, 60);
      this.texto.pantallas(35, 16, 255, 20, 500);
    }

    if (this.pantallas == 19) {
      this.img.pantalla(16);
      this.texto.pantallas(36, 18, 255, 290, 70);
    }

    if (this.pantallas == 20) {
      this.img.pantalla(17);

      this.texto.pantallas(37, 16, 255, 270, 30);
      this.texto.pantallas(38, 16, 255, 20, 445);
    }

    //FIN De DAMMA DE COMPANIA
    if (this.pantallas == 21 && mousePressed) {
      this.EsFinal = true;
    }

    //INICIO DE PEDIR AYUDA
    if (this.pantallas == 22) {
      this.img.pantalla(18);
      this.texto.pantallas(39, 16, 255, 350, 50);
      this.texto.pantallas(40, 16, 255, 300, 320);
    }

    //Opciones MILLONARIA O BRUJA
    if (this.pantallas == 23) {
      //Opciones
      this.img.pantalla(7);


      this.boton(140, 400, 50, 24 );
      this.boton(460, 400, 50, 37);

      this.texto.pantallas(6, 100, 0, 110, 430);
      this.texto.pantallas(7, 100, 0, 430, 430);

      this.texto.pantallas(41, 20, 0, 90, 480);
      this.texto.pantallas(42, 20, 0, 420, 480);
    }



    //INICIO DE MILLONARIA
    if (this.pantallas == 24) {
      this.img.pantalla(19);
      this.texto.pantallas(43, 18, 255, 290, 50);
    }

    if (this.pantallas == 25) {
      this.img.pantalla(20);
      this.texto.pantallas(44, 16, 255, 20, 150);
    }

    if (this.pantallas == 26) {
      this.img.pantalla(21);
      this.texto.pantallas(45, 16, 255, 190, 40);
      this.texto.pantallas(46, 16, 255, 370, 270);
    }

    //Opciones   ENAMORARSE O MORIR DE VIEJA
    if (this.pantallas == 27) {
      //Opciones
      this.img.pantalla(7);


      this.boton(140, 400, 50, 28 );
      this.boton(460, 400, 50, 34);

      this.texto.pantallas(6, 100, 0, 110, 430);
      this.texto.pantallas(7, 100, 0, 430, 430);

      this.texto.pantallas(47, 20, 0, 90, 480);
      this.texto.pantallas(48, 20, 0, 420, 480);
    }

    //INICIO DE ENAMORARSE
    if (this.pantallas == 28) {
      //Opciones
      this.img.pantalla(7);


      this.boton(240, 400, 50, 29 );
      this.boton(360, 400, 50, 32);

      this.texto.pantallas(6, 100, 0, 210, 430);
      this.texto.pantallas(7, 100, 0, 330, 430);

      this.texto.pantallas(49, 20, 0, 90, 480);
      this.texto.pantallas(50, 20, 0, 320, 480);
    }


    //INICIO DE INCUMPLIR EL TRATO
    if (this.pantallas == 29) {
      this.img.pantalla(22);
      this.texto.pantallas(51, 18, 255, 230, 50);
      this.texto.pantallas(52, 18, 255, 290, 330);
    }

    if (this.pantallas == 30) {
      this.img.pantalla(23);


      this.texto.pantallas(53, 18, 255, 20, 40);
      this.texto.pantallas(54, 18, 255, 210, 150);
      this.texto.pantallas(55, 18, 255, 350, 360);
    }

    //TERMINO INCUMPLIR EL TRATO
    if (this.pantallas == 31  && mousePressed) {
      this.EsFinal = true;
    }

    //INICIO DE CUMPLIR EL TRATO
    if (this.pantallas == 32) {
      this.img.pantalla(25);
      this.texto.pantallas(56, 16, 255, 30, 50);
    }

    //TERMINO CUMPLIR EL TRATO
    if (this.pantallas == 33  && mousePressed) {
      this.EsFinal = true;
    }

    //INICIO DE VIEJA
    if (this.pantallas == 34) {
      this.img.pantalla(24);
      this.texto.pantallas(57, 18, 255, 250, 100);
    }

    if (this.pantallas == 35) {
      this.img.pantalla(26);
      this.texto.pantallas(58, 18, 255, 345, 60);
    }

    //FIN DE VIEJA
    if (this.pantallas == 36  && mousePressed) {
      this.EsFinal = true;
    }



    //INICIO de bruja
    if (this.pantallas == 37) {
      this.img.pantalla(27);
      this.texto.pantallas(59, 18, 255, 20, 350);
    }

    if (this.pantallas == 38) {
      this.img.pantalla(28);
      this.texto.pantallas(60, 18, 255, 220, 60);
      this.texto.pantallas(61, 18, 255, 290, 350);
    }

    //FIN DE BRUJA
    if (this.pantallas == 39  && mousePressed) {
      this.EsFinal = true;
    }

    if (this.EsFinal == true) {
      this.Final();
    }

    //Creditos
    if (this.pantallas == 40) {
      background(0);
      this.img.pantalla(31);
      this.texto.pantallas(62, 20, 0, 220, 220);
      this.texto.pantallas(63, 20, 0, 220, 280);
    }
  }
  //Funcion que devuelve valores
  puedoAV(si, no)
  {
    if (this.pantallas == -1 || this.pantallas == 3 || this.pantallas == 11 || this.pantallas == 23 || this.pantallas == 27 || this.pantallas == 28 || this.pantallas == 40) {
      this.respuesta = no;
      return this.respuesta;
    } else {
      this.respuesta = si;
      return this.respuesta;
    }
  }
  
  boton( x, y, rad, pantallaSig) {
    fill(183, 174, 96);
    ellipse(x, y, rad, rad);

    this.dentro = dist(mouseX, mouseY, x, y);
    if ( this.dentro < rad ) {
      cuento.pantallas=pantallaSig;
      cuento.camino=0;
    }
  }

  botonRosa( x, y, rad, pantallaSig) {
    fill(214, 168, 187);
    ellipse(x, y, rad, rad);

    this.dentro = dist(mouseX, mouseY, x, y);
    if ( this.dentro < rad ) {
      this.pantallas = pantallaSig;
      this.camino=0;
    }
  }

  Final() {
    this.camino = 1;
    this.reiniciar = true;
    this.img.pantalla(30);

    this.texto.pantallas(64, 20, 0, 75, 170);
    this.texto.pantallas(63, 20, 0, 75, 220);
  }
}
