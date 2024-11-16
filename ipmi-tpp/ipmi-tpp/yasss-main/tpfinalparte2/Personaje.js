class Personaje {
  constructor() {
    this.posX = 400;
    this.posY = 245;
    this.vida = 1;
    this.moviendoseArriba = false;
  }
  dibujar() {

    if (this.vida > 0) {
      if (this.agachado) {        
        image(imgDora, this.posX, this.posY + 120, 180, 180); 
      } else {
        image(imgDora, this.posX, this.posY, 180, 180);
      }
      this.mover();
    } else {
      estado = "muerte";
    }
  }
  mover() {

    if (this.moviendoseArriba == true) {
      this.posY -= 20;
      if (this.posY <= 10) {
        this.moviendoseArriba = false;
      }
    } else {
      if (this.posY < 240) {
        this.posY += 7;
      }
    }
  }
  matar() {
    this.vida--;
  }
  haSidoGolpeado(obstaculo) {
    let posYColision;
    let radioColision
    if (this.agachado) {
    posYColision = this.posY + 200; 
    radioColision = 80; 
  } else {
    posYColision = this.posY + 90; 
    radioColision = 80; 
  }

  let distancia = dist(this.posX + 90, posYColision, obstaculo.posX + 30, obstaculo.posY + 30);
  if (distancia < radioColision) {
    this.matar();
  }
  }
  teclaPresionada(key) {
    if (key === ' ') { // Salto
      if (this.posY >= 240 && !this.agachado) {
        this.moviendoseArriba = true;
      }
    } else if ((key === 's') || (key === 'S')) { 
      this.agachado = true;
    }
  }

  teclaLiberada(key) {
    if ((key === 's') || (key === 'S')) { 
      this.agachado = false;
    }
  }
}
