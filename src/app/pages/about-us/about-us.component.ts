import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  containerButtonOne = {
    width: 210,
    height: 48,
    colorBorder: '#212129',
    backgroundColor: '#F0AE20',
    span: false,
    text: 'Quiero cotizar'
  }
}
