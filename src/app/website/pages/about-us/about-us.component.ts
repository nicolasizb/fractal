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
    paragraph: 'Fundamos esta empresa en 2015 con el propósito de brindar un servicio eficiente a hogares o empresas de todos los tamaños.',
    img: '../../../assets/vector/vector-men-water.svg',
  }
  
  sectionCallToAction = {
    title: 'Optimiza tus recursos, maximiza el rendimiento.',
    paragraph: 'Haz clic en ¡Empecemos! Y descubre cómo nuestras soluciones personalizadas están diseñadas para satisfacer tus necesidades específicas.',
    img: 'https://images.pexels.com/photos/3862614/pexels-photo-3862614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
}
