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
    text: 'Cotizar ahora'
  } 

  containerButtonTwo = {
    width: 160,
    height: 40,
    colorBorder: '#212129',
    backgroundColor: '#F0AE20',
    span: true,
    text: 'Explorar'
  }

  sectionShortsTriggers = {
    triggerOne: 'Trigger 1',
    imgOne: '../../../../assets/icon/icon-verification-color-5.svg',

    triggerTwo: 'Trigger 2',
    imgTwo: '../../../../assets/icon/icon-verification-color-5.svg',

    triggerThree: 'Trigger 3',
    imgThree: '../../../../assets/icon/icon-verification-color-5.svg',

    triggerFour: 'Trigger 4',
    imgFour: '../../../../assets/icon/icon-verification-color-5.svg',
  }

  sectionCallToAction = {
    title: 'Acelera tus logros con eficiencia imparable.',
    paragraph: 'Haz clic en ¡Empecemos! para transformar tus espacios con soluciones vanguardistas que maximizan tus recursos y potencian tu rendimiento.',
    img: 'https://images.pexels.com/photos/3862614/pexels-photo-3862614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
}