class CalcController  {
  constructor() {
    this._locate = 'pt-BR'
    this._currentDate;
    this._displayCalcEl = document.querySelector('#display');
    this._dateEl = document.querySelector('#data');
    this._timeEl = document.querySelector('#hora');
    this.inicialize();
    this.initButtonsEvents();
  }
  inicialize () {
    this.setDisplayDateTime();
    
    setInterval( () => {
      this.setDisplayDateTime();
    }, 1000)    
  }
  addEventListenerAll (element, events, fn) {
    events.split(' ').forEach(event => {
      element.addEventListener(event, fn, false); 
    });
  }

  initButtonsEvents(){
    let buttons = document.querySelectorAll('#buttons > g, #parts > g');
    buttons.forEach(btn => {
      this.addEventListenerAll(btn, 'click drag', e => {
        console.log(btn.className.baseVal.replace('btn-',''));
      });
      this.addEventListenerAll(btn, 'mouseover mouseup maousedown', e=> {
        btn.style.cursor= 'pointer';
      })
    });
  }

  setDisplayDateTime () {
    this.displayDate = this.currentDate.toLocaleDateString(this._locate,{
      day:   '2-digit',
      month: 'long',
      year:  'numeric'
    });
    this.displayTime = this.currentDate.toLocaleTimeString(this._locate);
  }

  get displayDate() {
    return this._dateEl.innerHTML;
  }

  set displayDate(value) {
    return this._dateEl.innerHTML = value;
  }  

  get displayTime() {
    return this._timeEl.innerHTML;
  }

  set displayTime(value) {
    return this._timeEl.innerHTML = value;
  }

  get displayCalc() {
    return this._displayCalcEl.innerHTML;
  }

  set displayCalc(value) {
    this._displayCalcEl.innerHTML = value;
  }
  get currentDate() {
    return new Date();
  }
  set currentDate(value) {
    this._currentDate = value;
  }
}
