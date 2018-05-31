class Celular {
  constructor () {
    this.cor = 'prata';
  }
  ligar(){
    console.log('fazendo ligação');
    return 'ligando';
  }
}
let sansung = new Celular();
console.log(sansung);
sansung.ligar();