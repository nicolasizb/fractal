import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-call-to-action',
  templateUrl: './section-call-to-action.component.html',
  styleUrls: ['./section-call-to-action.component.scss']
})
export class SectionCallToActionComponent {
  @Input() titleListener = "";
  @Input() paragraphListener = "";
  @Input() imgListener = "";

  @Input() linkPageListener = "";

  containerButtonOne = {
    width: 210,
    height: 48,
    colorBorder: '#212129',
    backgroundColor: '#F0AE20',
    span: true,
    text: 'Empecemos'
  }
}
