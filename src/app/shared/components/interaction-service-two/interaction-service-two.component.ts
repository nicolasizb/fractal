import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-interaction-service-two',
  templateUrl: './interaction-service-two.component.html',
  styleUrls: ['./interaction-service-two.component.scss']
})
export class InteractionServiceTwoComponent {

  @Input() titleServiceOneListener = '';
  @Input() imgServiceOneListener = '';
  @Input() paragraphServiceOneListener = '';
  
  @Input() titleServiceTwoListener = '';
  @Input() imgServiceTwoListener = '';
  @Input() paragraphServiceTwoListener = '';

  @Input() titleColorServiceListener = 'var(--color-4)';

  @Input() linkPageListener = '';


  containerButtonOne = {
    width: 210,
    height: 48,
    colorBorder: 'var(--color-dark)',
    backgroundColor: 'var(--color-4)',
    span: true,
    text: 'Empecemos'
  }

  serviceStateOne: boolean = true;
  serviceStateTwo: boolean = false;

  serviceStateMobile: boolean = false;

  toggleServiceState() {
    this.serviceStateOne = !this.serviceStateOne;
    this.serviceStateTwo = !this.serviceStateTwo;
  }

  ngAfterViewInit() {
    this.stateWidthPage();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.stateWidthPage();
  }

  stateWidthPage() {
    if(window.innerWidth < 680) {
      this.serviceStateMobile = true;
      this.serviceStateOne = false;
      this.serviceStateTwo = false;
    } else if (this.serviceStateOne) {
      this.serviceStateMobile = false;
      this.serviceStateOne = true;
      this.serviceStateTwo = false;
    } else {
      this.serviceStateMobile = false;
      this.serviceStateOne = false;
      this.serviceStateTwo = true;
    }
  }
}
