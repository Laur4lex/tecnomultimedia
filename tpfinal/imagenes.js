class Img {

  constructor() {

    this.imagenes = [];

    this.imagenes[0] = loadImage("img2/1.jpg");
    this.imagenes[1] = loadImage("img2/2.jpg");
    this.imagenes[2] = loadImage("img2/3.jpg");
    this.imagenes[3] = loadImage("img2/4.jpg");
    this.imagenes[4] = loadImage("img2/5.jpg");
    this.imagenes[5] = loadImage("img2/6.jpg");
    this.imagenes[6] = loadImage("img2/7.jpg");
    this.imagenes[7] = loadImage("img2/8.jpg");
    this.imagenes[8] = loadImage("img2/9.jpg");
    this.imagenes[9] = loadImage("img2/10.jpg");
    this.imagenes[10] = loadImage("img2/11.jpg");
    this.imagenes[11] = loadImage("img2/12.jpg");
    this.imagenes[12] = loadImage("img2/13.jpg");
    this.imagenes[13] = loadImage("img2/14.jpg");
    this.imagenes[14] = loadImage("img2/15.jpg");
    this.imagenes[15] = loadImage("img2/16.jpg");
    this.imagenes[16] = loadImage("img2/17.jpg");
    this.imagenes[17] = loadImage("img2/18.jpg");
    this.imagenes[18] = loadImage("img2/19.jpg");
    this.imagenes[19] = loadImage("img2/20.jpg");
    this.imagenes[20] = loadImage("img2/21.jpg");
    this.imagenes[21] = loadImage("img2/22.jpg");
    this.imagenes[22] = loadImage("img2/23.jpg");
    this.imagenes[23] = loadImage("img2/24.jpg");
    this.imagenes[24] = loadImage("img2/25.jpg");
    this.imagenes[25] = loadImage("img2/26.jpg");
    this.imagenes[26] = loadImage("img2/27.jpg");
    this.imagenes[27] = loadImage("img2/28.jpg");
    this.imagenes[28] = loadImage("img2/29.jpg");
    this.imagenes[29] = loadImage("img2/30.jpg");
    this.imagenes[30] = loadImage("img2/31.jpg");
    this.imagenes[31] = loadImage("img2/32.jpg");
    this.imagenes[32] = loadImage("img2/33.jpg");
    this.imagenes[33] = loadImage("img2/34.jpg");
    this.imagenes[34] = loadImage("img2/35.jpg");
    this.imagenes[35] = loadImage("img2/36.jpg");
    this.imagenes[36] = loadImage("img2/37.jpg");
    this.imagenes[37] = loadImage("img2/38.jpg");
    this.imagenes[38] = loadImage("img2/39.jpg");
    this.imagenes[39] = loadImage("img2/40.jpg");
  }

  pantalla(id) {
    image(this.imagenes[id], 0, 0, width, height);
  }
}
