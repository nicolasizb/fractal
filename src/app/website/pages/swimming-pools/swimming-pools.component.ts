import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-swimming-pools',
  templateUrl: './swimming-pools.component.html',
  styleUrls: ['./swimming-pools.component.scss']
})
export class SwimmingPoolsComponent {

  constructor(
    private titleService: Title,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const pageTitle = data['title'];
      this.titleService.setTitle(pageTitle);
    }); 
  }

  containerButtonOne = {
    width: 210,
    height: 48,
    colorBorder: 'var(--color-dark)',
    backgroundColor: 'var(--color-2)',
    span: true,
    text: 'Cotizar'
  };

  colorLayout = 'var(--color-2)';

  linkPage = '/servicios/piscinas/contacto';

  containerHeadPageService = {
    title: 'Piscinas',
    titleColor: 'var(--color-2)',
    paragraph:'Sumérgete en la Excelencia; cada detalle, cada onda, pensados para ti.',
    imgContainer: '../../../../assets/img/cover-swimming-pool.jpg'
  };

  sectionShortsTriggers = {
    triggerOne: 'Trigger 1',
    imgOne: '../../../../assets/icon/icon-verification-color-2.svg',

    triggerTwo: 'Trigger 2',
    imgTwo: '../../../../assets/icon/icon-verification-color-2.svg',

    triggerThree: 'Trigger 3',
    imgThree: '../../../../assets/icon/icon-verification-color-2.svg',

    triggerFour: 'Trigger 4',
    imgFour: '../../../../assets/icon/icon-verification-color-2.svg',
  }

  sectionCallToAction = {
    title: ' Donde cada chapuzón es una experiencia única',
    paragraph: 'Haz clic en ¡Empecemos! Y sumérgete en un mundo de posibilidades acuáticas.',
    img: '../../../../assets/vector/vector-women-solar-planet-drop.svg'
  };

  cardServices = {
    titleServiceOne: 'Administración',
    imgServiceOne: '../../../../assets/img/tes-swimming-pool-nine.jpg',
    paragraphServiceOne: `<p>Gestionamos limpieza, seguridad, personal, horarios, finanzas y cumplimiento normativo.</p>
    <br>
    <p>Nos aseguramos que la piscina sea segura, funcional y atractiva para los usuarios, mientras se gestionan eficientemente los recursos y se cumplen las regulaciones.</p>`,
    

    titleServiceTwo: 'Asesoría',
    imgServiceTwo: '../../../../assets/img/tes-swimming-pool-eleven.jpg',
    paragraphServiceTwo: `<p>Brindamos un equipo de expertos en gestión acuática para optimizar el mantenimiento, seguridad, eficiencia y cumplimiento normativo de las instalaciones.</p>
    <br>
    <p>Proporcionamos orientación sobre tratamiento del agua, seguridad, diseño y más, asegurando un funcionamiento exitoso y funcional de la piscina.</p>`,

    titleServiceThree: 'Control y dosificación',
    imgServiceThree: '../../../../assets/img/tes-swimming-pool-ten.jpg',
    paragraphServiceThree: `<p>Monitorearamos y ajustamos con precisión los niveles químicos del agua, como el pH y el cloro, para mantenerla segura y cómoda.</p>
    <br>
    <p>Esto asegura la salud de los nadadores y la integridad de la piscina a largo plazo.</p>`,

    titleServiceFour: 'Desinfección',
    imgServiceFour: '../../../../assets/img/tes-swimming-pool-twelve.jpg',
    paragraphServiceFour: `<p>Eliminación de microorganismos y patógenos del agua mediante el uso de productos químicos como el cloro.</p>
    <br>
    <p>Esto garantiza un entorno seguro y saludable para los nadadores, previniendo enfermedades y asegurando la limpieza de la piscina.</p>`,
  }

  sectionSliderTransition = {
    personNameOne: "Name",
    businessNameOne: "Centro de Salvamento Acuático Cruz Roja", 
    paragraphOne: "Elegir a AMP para el mantenimiento de nuestra piscina fue una decisión que transformó la experiencia de nuestros usuarios. Su enfoque meticuloso en la limpieza y el mantenimiento constante nos brinda una piscina siempre impecable.!",
    imageOne: "../../../../assets/img/tes-curz-roja-three.jpg",

    personNameTwo: "Name",
    businessNameTwo: "Business", 
    paragraphTwo: "Su conocimiento sobre regulaciones y normativas nos ha mantenido en buen camino. Gracias a su guía, siempre cumplimos con todos los requisitos legales y regulatorios.",
    imageTwo: "../../../../assets/img/tes-swimming-pool-five.jpg",

    personNameThree: "Name",
    businessNameThree: "Business", 
    paragraphThree: "AMP ha demostrado ser el experto en mantener el equilibrio químico perfecto en nuestra piscina. Su conocimiento de productos químicos y su enfoque en el pH y el cloro aseguran que el agua sea segura y agradable.",
    imageThree: "../../../../assets/img/tes-swimming-pool-small.jpg",

    personNameFour: "Name",
    businessNameFour: "Business", 
    paragraphFour: "Desde que comenzamos a trabajar juntos, la limpieza y la higiene de nuestra piscina se han convertido en una ventaja competitiva. Los comentarios positivos de nuestros clientes hablan por sí mismos.",
    imageFour: "../../../../assets/img/tes-swimming-pool-three.jpg",
  }

  serviceStateOne: boolean = true;
  serviceStateTwo: boolean = false;
  serviceStateThree: boolean = false;
  serviceStateFour: boolean = false;

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
}
