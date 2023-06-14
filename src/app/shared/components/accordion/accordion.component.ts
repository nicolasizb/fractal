import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  @Input() questionParagraphListener: string = '';
  @Input() answerParagraphListener: string = '';

  stateSpan: boolean = false;

  activeContainerAccordion() {
    this.stateSpan = !this.stateSpan;
  }
}
