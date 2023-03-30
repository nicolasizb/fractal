import { Component } from '@angular/core';

@Component({
  selector: 'app-cover-home',
  templateUrl: './cover-home.component.html',
  styleUrls: ['./cover-home.component.scss']
})
export class CoverHomeComponent {
  selectTextButtonOne = "Quiero cotizar";
  selectTextButtonTwo = "Explorar";
  spanListenerButtonTwo = true;

  containerButtonOne = {
    width: 210,
    height: 48
  } 

  containerButtonTwo = {
    width: 160,
    height: 40
  } 


}
