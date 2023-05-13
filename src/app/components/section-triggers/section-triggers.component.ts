import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-triggers',
  templateUrl: './section-triggers.component.html',
  styleUrls: ['./section-triggers.component.scss']
})
export class SectionTriggersComponent {
  @Input() titleContainerTriggersListener = '';
  @Input() paragraphContainerTriggersListener = '';

  @Input() iconTriggerListenerOne = '';
  @Input() titleTriggerListenerOne = '';
  @Input() paragraphTriggerListenerOne = '';

  @Input() iconTriggerListenerTwo = '';
  @Input() titleTriggerListenerTwo = '';
  @Input() paragraphTriggerListenerTwo = '';

  @Input() iconTriggerListenerThree = '';
  @Input() titleTriggerListenerThree = '';
  @Input() paragraphTriggerListenerThree = '';
}
