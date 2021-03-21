import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = '12';

constructor () {
  //console.log(123)
  //this.name = 'tripti';
  this.ChangeName('tripti');
}
ChangeName(name:string):void{
  this.name = name;
}
}

