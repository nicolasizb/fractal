import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-shorts-triggers',
  templateUrl: './section-shorts-triggers.component.html',
  styleUrls: ['./section-shorts-triggers.component.scss']
})
export class SectionShortsTriggersComponent {
  @Input() textOneListener = '';
  @Input() imgOneListener = '';

  @Input() textTwoListener = '';
  @Input() imgTwoListener = '';

  @Input() textThreeListener = '';
  @Input() imgThreeListener = '';

  @Input() textFourListener = '';
  @Input() imgFourListener = '';

  @Input() colorTextListener = '';
}
