class CalcControler {
  constructor () {
    this._locale = 'pt-Br';
    this._displayCalc = "0";
    this._currentDate;
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#data");
    this._timeEl = document.querySelector("#hora");
    this.initializer();
    this.initButtonsEvents();
  }

  initializer() {
    this.setDisplayDateTime();
    setInterval( () => {
      this.setDisplayDateTime();
    }, 1000);
  }
  addEventListenerAll(el, events, fn) {
    events.split(' ').forEach(event => {
      el.addEventListener(event, fn, false);
    });
  }
  initButtonsEvents() {
    let buttons = document.querySelectorAll('#buttons > g, #parts > g');

    buttons.forEach (btn => { this.addEventListenerAll(btn, 'click drag', e => {
      console.log(btn.className.baseVal.replace("btn-",""));
      });

      this.addEventListenerAll(btn, "mouseover mouseup mousedown", e=>{
        btn.style.cursor = "pointer";
      })
    });
  }

  setDisplayDateTime() {
    this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
  }
  
  get displayTime() {
    return this._timeEl.innerHTML;
  }

  set displayTime(value) {
    this._timeEl.innerHTML = value;
  }
  
  get displayDate() {
    return this._dateEl.innerHTML;
  }

  set displayDate(value) {
    this._dateEl.innerHTML = value;
  }

  get displaycalc() {
    return this._displayCalcEl.innerHTML;
  }
  
  set displaycalc (value) {
    this._displayCalcEl.innerHTML = value;
  }

  get currentDate() {
    return new Date();
  }

  set currentDate(value) {
    this._currentDate = value;
  }

}