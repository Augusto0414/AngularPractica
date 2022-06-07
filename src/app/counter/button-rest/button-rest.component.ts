import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-rest',
  templateUrl: './button-rest.component.html',
  styleUrls: ['./button-rest.component.css']
})
export class ButtonRestComponent {
  @Input()
  cont: number = 0;
  result: number = 0;
  @Output() resultChange = new EventEmitter<number>();
  rest() {
    this.result = (this.cont > 0) ? this.cont-- : 0;
    this.resultChange.emit(this.result);
  }

}
