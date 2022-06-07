import { Component } from "@angular/core";
@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})

export class CounterComponent {
  cont: number = 0;
  result: number = 0;
  add() {
    this.cont++;
  }
  rest() {
    this.result = (this.cont > 0) ? this.cont-- : 0;
  }
}
