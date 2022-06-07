import { Component } from "@angular/core";
@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})

export class CounterComponent {
  cont: number = 0;
  handleAdd(value: number) {
    this.cont = value;
  }
  handleRest(value: number) {
  this.cont = value;
  }
}
