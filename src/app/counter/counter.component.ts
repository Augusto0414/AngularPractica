import { Component } from "@angular/core";
@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})

export class CounterComponent {
  cont: number = 0;
  resul: number = 0;
  handleCounter(value: number) {
    this.cont = value;
  }
}
