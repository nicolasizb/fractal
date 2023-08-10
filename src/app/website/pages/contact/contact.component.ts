import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(
    private titleService: Title,
    private route: ActivatedRoute
  ) {}

  containerButtonOne = {
    width: 210,
    height: 48,
    colorBorder: '#11111F',
    backgroundColor: '#F0AE20',
    span: false,
    text: 'Quiero cotizar'
  }

  containerHead = {
    title: 'Nos apasiona convertir ideas en realidades',
    paragraph: 'Trabajamos estrechamente con nuestros clientes en los proyectos más desafiantes.',
    img: '../../../../assets/vector/vector-women-lightbulb-eco.svg',
    containerButton: false
  }

  dataAttributeForm = {
    dataTfWidget: 'ccWKh9jv',
    dataTfOpacity: '100',
    dataTfHideHeaders: '',
    dataTfIframeProps: 'title=Contact AMP Integral Solution',
    dataTfTransitiveSearchParams: '',
    dataTfMedium: 'snippet',
    style: 'width:100%;height:450px;'
  }

  sectionSliderTransition = {
    personNameOne: "Name",
    businessNameOne: "Centro de Salvamento Acuático Cruz Roja", 
    paragraphOne: "Elegir a AMP para el mantenimiento de nuestra piscina fue una decisión que transformó la experiencia de nuestros usuarios. Su enfoque meticuloso en la limpieza y el mantenimiento constante nos brinda una piscina siempre impecable.",
    imageOne: "../../../../assets/img/tes-curz-roja-three.jpg",

    personNameTwo: "Name",
    businessNameTwo: "SIESSA", 
    paragraphTwo: "Confiar en AMP para nuestra solución de energía solar ha significado que incluso en días nublados seguimos viendo los beneficios. Aunque la dependencia de la luz solar puede ser un desafío, hemos aprendido que nuestra producción de energía es resiliente.",
    imageTwo: "../../../../assets/img/tes-siessa-one-small.jpg",

    personNameThree: "Name",
    businessNameThree: "Business", 
    paragraphThree: "AMP ha demostrado ser el experto en mantener el equilibrio químico perfecto en nuestra piscina. Su conocimiento de productos químicos y su enfoque en el pH y el cloro aseguran que el agua sea segura y agradable.",
    imageThree: "../../../../assets/img/tes-swimming-pool-small.jpg",

    personNameFour: "Name",
    businessNameFour: "GAIAG", 
    paragraphFour: "Contratar a AMP para nuestra instalación de energía solar fue una inversión que valió la pena. Aunque hubo un costo inicial, rápidamente notamos los beneficios en nuestras facturas de electricidad más bajas y la independencia energética que ahora disfrutamos.",
    imageFour: "../../../../assets/img/tes-gaiga-small.jpg",
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const pageTitle = data['title'];
      this.titleService.setTitle(pageTitle);
    });
  }
}
