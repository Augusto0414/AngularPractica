import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-rest',
  templateUrl: './button-rest.component.html',
  styleUrls: ['./button-rest.component.css']
})
export class ButtonRestComponent {
  @Input()
  cont: number = 0;
  resul:number = 0;
  @Output() onDiss: EventEmitter<number> = new EventEmitter();
  rest() {
    this.resul = (this.cont > 0) ? this.cont-- : 0;
    this.onDiss.emit(this.cont);
  }

}
