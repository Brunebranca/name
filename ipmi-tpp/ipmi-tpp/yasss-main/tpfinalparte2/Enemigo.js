class Enemigo {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    
  }
  dibujar() {
    image(imgZorro, this.posX, this.posY, 180, 180);
  }
}
