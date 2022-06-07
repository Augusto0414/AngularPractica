import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica';
  cont: number = 0;
  result : number = 0;
  add(){
    this.cont++;
  }
  rest(){
    this.result = (this.cont > 0) ? this.cont-- : 0;
  }
}
