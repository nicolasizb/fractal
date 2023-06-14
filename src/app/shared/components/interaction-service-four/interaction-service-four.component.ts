import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-interaction-service-four',
  templateUrl: './interaction-service-four.component.html',
  styleUrls: ['./interaction-service-four.component.scss']
})
export class InteractionServiceFourComponent {
  @Input() titleServiceOneListener = '';
  @Input() imgServiceOneListener = '';
  @Input() paragraphServiceOneListener = '';
  
  @Input() titleServiceTwoListener = '';
  @Input() imgServiceTwoListener = '';
  @Input() paragraphServiceTwoListener = '';

  @Input() titleServiceThreeListener = '';
  @Input() imgServiceThreeListener = '';
  @Input() paragraphServiceThreeListener = '';

  @Input() titleServiceFourListener = '';
  @Input() imgServiceFourListener = '';
  @Input() paragraphServiceFourListener = '';

  @Input() linkPageListener = '';

  containerButtonOne = {
    width: 210,
    height: 48,
    colorBorder: '#212129',
    backgroundColor: '#F0AE20',
    span: true,
    text: 'Empecemos'
  } 


  serviceStateOne: boolean = true;
  serviceStateTwo: boolean = false;
  serviceStateThree: boolean = false;
  serviceStateFour: boolean = false;

  serviceStateMobile: boolean = false;

  toggleServiceState() {
    this.serviceStateOne = true;
    this.serviceStateTwo = false;
    this.serviceStateThree = false;
    this.serviceStateFour = false;
  }

  toggleServiceStateTwo() {
    this.serviceStateOne = false;
    this.serviceStateTwo = true;
    this.serviceStateThree = false;
    this.serviceStateFour = false;
  }

  toggleServiceStateThree() {
    this.serviceStateOne = false;
    this.serviceStateTwo = false;
    this.serviceStateThree = true;
    this.serviceStateFour = false;
  }

  toggleServiceStateFour() {
    this.serviceStateOne = false;
    this.serviceStateTwo = false;
    this.serviceStateThree = false;
    this.serviceStateFour = true;
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
      this.serviceStateThree = false;
      this.serviceStateFour = false;
    } else if (this.serviceStateOne) {
      this.serviceStateMobile = false;
      this.serviceStateOne = true;
      this.serviceStateTwo = false;
      this.serviceStateThree = false;
      this.serviceStateFour = false;
    } else if (this.serviceStateTwo) {
      this.serviceStateMobile = false;
      this.serviceStateOne = false;
      this.serviceStateTwo = true;
      this.serviceStateThree = false;
      this.serviceStateFour = false;
    } else if (this.serviceStateThree) {
      this.serviceStateMobile = false;
      this.serviceStateOne = false;
      this.serviceStateTwo = false;
      this.serviceStateThree = true;
      this.serviceStateFour = false;
    } else {
      this.serviceStateMobile = false;
      this.serviceStateOne = false;
      this.serviceStateTwo = false;
      this.serviceStateThree = false;
      this.serviceStateFour = true;
    }
  }
}
