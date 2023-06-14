import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head-page-service',
  templateUrl: './head-page-service.component.html',
  styleUrls: ['./head-page-service.component.scss']
})
export class HeadPageServiceComponent {

  @Input() titleListener = '';
  @Input() paragraphListener = '';
  @Input() imgContainerListener = '';
  @Input() titleColorListener = '';

  @Input() backgroundColorButtonListener = '';
  @Input() textColorButtonListener = '';
  @Input() borderColorButtonListener = '';

  @Input() linkPageListener = '';
  
  
  containerButtonOne = {
    width: 210,
    height: 48,
    colorBorder: '#212129',
    backgroundColor: '#F0AE20',
    span: true,
    text: 'Quiero cotizar'
  }

  constructor(private router: Router) {}

  // redirectTo() {
  //   this.router.navigate([this.linkPageListener]);
  // }
}
