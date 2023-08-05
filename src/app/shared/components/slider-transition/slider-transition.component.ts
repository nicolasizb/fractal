import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider-transition',
  templateUrl: './slider-transition.component.html',
  styleUrls: ['./slider-transition.component.scss']
})
export class SliderTransitionComponent {
  @Input() personNameOneListener = ""; 
  @Input() businessNameOneListener = ""; 
  @Input() paragraphOneListener = ""; 
  @Input() imageOneListener = "";

  @Input() personNameTwoListener = ""; 
  @Input() businessNameTwoListener = ""; 
  @Input() paragraphTwoListener = ""; 
  @Input() imageTwoListener = ""; 

  @Input() personNameThreeListener = ""; 
  @Input() businessNameThreeListener = ""; 
  @Input() paragraphThreeListener = ""; 
  @Input() imageThreeListener = ""; 

  @Input() personNameFourListener = ""; 
  @Input() businessNameFourListener = ""; 
  @Input() paragraphFourListener = "";
  @Input() imageFourListener = "";
}
