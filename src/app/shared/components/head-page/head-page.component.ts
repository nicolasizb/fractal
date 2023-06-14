import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-head-page',
  templateUrl: './head-page.component.html',
  styleUrls: ['./head-page.component.scss']
})
export class HeadPageComponent {

  @Input() headTitleTextListener = "";
  @Input() headParagraphTextListener = "";
  @Input() imgVectorListener = "";
  @Input() containerButtonListener: boolean = true;

  containerButtonOne = {
    width: 210,
    height: 48,
    colorBorder: '#212129',
    backgroundColor: '#F0AE20',
    span: false,
    text: 'Quiero cotizar'
  }

}
