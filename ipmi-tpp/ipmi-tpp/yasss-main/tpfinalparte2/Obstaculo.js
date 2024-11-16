class Obstaculo {
  constructor(posX, velocidad) {
    this.posX = posX;
    this.posY = int (random(240, 400));
    this.vel = velocidad;
  }
  dibujar() {

    image(imgCuchillo, this.posX, this.posY, 60, 60);
  }
  actualizar() {

    this.posX += this.vel;

    if (this.posX > width) {
      this.reciclar();
    }
  }
  reciclar() {
    this.posX = 80;
    this.posY = int(random(240, 370));
  }
  colisionaCon(personaje) {
    let distancia = dist(this.posX, this.posY, personaje.posX, personaje.posY);
    return distancia < 80;
  }
}
