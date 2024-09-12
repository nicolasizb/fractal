import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private titleService: Title, private route: ActivatedRoute) { }

  containerButtonOne = {
    width: 270,
    height: 48,
    colorBorder: 'var(--color-3)',
    backgroundColor: 'var(--color-gray)',
    span: true,
    text: 'Conoce lo que hacemos'
  } 

  containerButtonTwo = {
    width: 160,
    height: 40,
    colorBorder: 'var(--color-dark)',
    backgroundColor: 'var(--color-4)',
    span: true,
    text: 'Explorar'
  }

  sectionShortsTriggers = {
    triggerOne: 'Número de producciones',
    imgOne: '../../../../assets/icon/fr/icon-verification-color-4.svg',

    triggerTwo: 'Facturación de nuestro clientes',
    imgTwo: '../../../../assets/icon/fr/icon-verification-color-4.svg',

    triggerThree: 'Número de producciones',
    imgThree: '../../../../assets/icon/fr/icon-verification-color-4.svg',

    triggerFour: 'Horas de contenido grabadas',
    imgFour: '../../../../assets/icon/fr/icon-verification-color-4.svg',
  }

  sectionCallToAction = {
    title: 'Acelera tus logros con eficiencia imparable.',
    paragraph: 'Haz clic en ¡Empecemos! para transformar tus espacios con soluciones vanguardistas que maximizan tus recursos y potencian tu rendimiento.',
    img: '../../../../assets/vector/fr/call-to-action.png'
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      const pageTitle = data['title'];
      this.titleService.setTitle(pageTitle);
    });
  }
}