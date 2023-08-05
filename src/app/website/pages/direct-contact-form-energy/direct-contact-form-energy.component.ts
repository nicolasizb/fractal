import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-direct-contact-form-energy',
  templateUrl: './direct-contact-form-energy.component.html',
  styleUrls: ['./direct-contact-form-energy.component.scss']
})
export class DirectContactFormEnergyComponent {

  constructor(
    private titleService: Title,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const pageTitle = data['title'];
      this.titleService.setTitle(pageTitle);
    })
  }
  
  containerHead = {
    title: 'Nos encanta convertir ideas en realidad',
    paragraph: 'Trabajamos codo a codo con nuestros clientes en los proyectos más desafiantes.',
    img: '../../../../assets/vector/vector-women-lightbulb-eco.svg',
    containerButton: false
  }

  dataAttributeForm = {
    dataTfWidget: 'If26cGNI',
    dataTfOpacity: '100',
    dataTfHideHeaders: '',
    dataTfIframeProps: 'title=Energía solar',
    dataTfTransitiveSearchParams: '',
    dataTfMedium: 'snippet',
    style: 'width:100%;height:450px;'
  }
}
