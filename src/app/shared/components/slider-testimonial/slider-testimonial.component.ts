import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-slider-testimonial',
  templateUrl: './slider-testimonial.component.html',
  styleUrls: ['./slider-testimonial.component.scss']
})
export class SliderTestimonialComponent {

  containerSliderHeight = 0;

  ngAfterViewInit() {
    this.actualizarAlturaPadre();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.actualizarAlturaPadre();
  }

  actualizarAlturaPadre() {    
    if (window.innerWidth <= 680 && window.innerWidth >= 485) {
      this.containerSliderHeight = 300;
    } else if (window.innerWidth <= 484 && window.innerWidth >= 425) {
      this.containerSliderHeight = 355;
    } else if (window.innerWidth <= 424 && window.innerWidth >= 345) {
      this.containerSliderHeight = 380;
    } else if (window.innerWidth <= 344 && window.innerWidth >= 200) {
      this.containerSliderHeight = 460;
    } 
    else {
      this.containerSliderHeight = 500;
    }
  }
}
