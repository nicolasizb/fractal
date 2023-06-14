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

  containerButtonOne = {
    width: 210,
    height: 48,
    colorBorder: '#212129',
    backgroundColor: '#F0AE20',
    span: false,
    text: 'Quiero cotizar'
  }

  containerHead = {
    title: 'Sobre nosotros',
    paragraph: 'Fundamos esta empresa en 2012 para ofrecer ingeniería de alta calidad a empresas de todos los tamaños.',
    img: '../../../assets/vector/vector-men-water.svg',
  }

  sectionTriggers = {
    titleContainer: '¿Por qué AMP?',
    paragraphContainer: 'Contratar profesionales de software talentosos es difícil. Retenerlos es mucho más difícil. Reclutamos, seleccionamos y retenemos al mejor talento tecnológico de LATAM para trabajar en los proyectos más desafiantes de nuestros clientes.',

    iconTriggerOne: 'https://uploads-ssl.webflow.com/5ef9e7820240534a394d4b30/634da3854ee75b52f7bfd5a7_Mundo.webp',
    titleCardOne: 'Vetted Talent 1',
    paragraphCardOne: "Imagine Apps hires less than 5% of applicants across all job openings. We curate our talent so you can be confident you're working with the best",

    iconTriggerTwo: 'https://uploads-ssl.webflow.com/5ef9e7820240534a394d4b30/634da3854ee75b52f7bfd5a7_Mundo.webp',
    titleCardTwo: 'Vetted Talent 2',
    paragraphCardTwo: "Imagine Apps hires less than 5% of applicants across all job openings. We curate our talent so you can be confident you're working with the best",

    iconTriggerThree: 'https://uploads-ssl.webflow.com/5ef9e7820240534a394d4b30/634da3854ee75b52f7bfd5a7_Mundo.webp',
    titleCardThree: 'Vetted Talent 3',
    paragraphCardThree: "Imagine Apps hires less than 5% of applicants across all job openings. We curate our talent so you can be confident you're working with the best",
  }

  
  sectionCallToAction = {
    title: 'Quiero energía limpia económica y digital',
    paragraph: 'Haz clic en ¡Sí quiero! para unirte al ecosistema de energía de ERCO o en conversemos para que un experto resuelva tus dudas.',
    img: 'https://images.pexels.com/photos/3862614/pexels-photo-3862614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
}
