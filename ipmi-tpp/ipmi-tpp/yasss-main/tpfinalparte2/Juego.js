class Juego {
  constructor() {
    this.crearPersonaje();
    this.crearEnemigo();
    this.crearObstaculo();
   
  }
  dibujar() {
    image(imgFondo, 0, 0, width, height);
    this.personaje.dibujar();
    this.obstaculo.actualizar();
    this.obstaculo.dibujar();
    this.enemigo.dibujar();

    this.personaje.haSidoGolpeado(this.obstaculo);
   
  }


  iniciar() {
  }
  crearObstaculo() {
    this.obstaculo= new Obstaculo (80, 7);
  }
  crearEnemigo() {
    this.enemigo= new Enemigo(20, 240);
  }
  crearPersonaje() {
    this.personaje = new Personaje();
  }
  teclaPresionada(key) {
    this.personaje.teclaPresionada(key);
  }
}
