import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  constructor(private titleService: Title, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      const pageTitle = data['title'];
      this.titleService.setTitle(pageTitle);
    });
  }

  containerHead = {
    title: 'Sobre nosotros',
    paragraph: 'Fundamos esta empresa con el propósito de brindar un servicio eficiente a pymes o empresas medianas.',
    img: '../../../../assets/vector/fr/identidad-marca.png',
  }
  
  sectionCallToAction = {
    title: 'Optimiza tus recursos, maximiza el rendimiento.',
    paragraph: 'Haz clic en ¡Empecemos! Y descubre cómo nuestras soluciones personalizadas están diseñadas para satisfacer tus necesidades específicas.',
    img: '../../../../assets/vector/fr/call-to-action.png'
  }
}
