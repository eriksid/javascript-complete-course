class Tv {
  constructor() {
    this.ligada = false;
    this.canal = 3;
  }
  ligar() {
    if (!this.ligada) this.ligada = true;
  }
  desLigar() {
    if (this.ligada) this.ligada = false;
  }
  trocarCanal() {
    this.canal ++;
  }
}

let tvQuarto = new Tv();
console.log(tvQuarto);
tvQuarto.trocarCanal();
tvQuarto.ligar();
console.log(tvQuarto);
