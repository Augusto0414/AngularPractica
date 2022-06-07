import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent {
  @Input()
  cont: number = 0;

  @Output()
  onAdd: EventEmitter<number> = new EventEmitter<number>();
  add() {
    this.cont++;
    this.onAdd.emit(this.cont);
  }
}
