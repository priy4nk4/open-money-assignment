import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'open-app';
  value: any;
  value1: any;
  
  valueChanged1(evt: any){
    this.value = evt.value;
  }
  valueChanged2(evt: any){
    this.value1 = evt.value;
  }

}
