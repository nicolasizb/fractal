import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-energy-house',
  templateUrl: './project-energy-house.component.html',
  styleUrls: ['./project-energy-house.component.scss']
})
export class ProjectEnergyHouseComponent {

  constructor(
    private titleService: Title,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const pageTitle = data['title'];
      this.titleService.setTitle(pageTitle)
    })
  }

  containerButtonOne = {
    width: 210,
    height: 48,
    colorBorder: 'var(--color-dark)',
    backgroundColor: 'var(--color-4)',
    span: true,
    text: 'Empecemos'
  }

  linkPage = '/servicios/proyectos-energia-solar/contacto';

  containerHeadPageService = {
    title: 'Energía solar para hogares',
    paragraph:'Creamos soluciones personalizadas y completas que se ajustan a tus requerimientos.',
    imgContainer: '../../../../assets/img/cover-house-amp.jpg',
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
    title: 'Toma el control y hazlo realidad.',
    paragraph: 'Haz clic en ¡Empecemos! Y comienza a experimentar los beneficios tangibles de la energía solar en tu hogar.',
    img: '../../../../assets/vector/vector-women-solar-planet-drop.svg'
  }

  sectionStepsToFollow = {
    questionOne: '1. Contrato',
    answerOne: 'Te proporcionamos la documentación, validas el acuerdo y te brindamos una introducción al programa Amp Integral Solution.',

    questionTwo: '2. Diseño',
    answerTwo: 'Agendamos una cita para una evaluación detallada con nuestros ingenieros y gestionamos la adquisición de tus dispositivos.',

    questionThree: '3. Instalación',
    answerThree: 'Desarrollamos tu proyecto conforme a los plazos establecidos, empleando nuestro propio y capacitado equipo.',

    questionFour: '4. Certificación',
    answerFour: 'Proporcionamos la documentación necesaria y coordinamos una visita para llevar a cabo la legalización y obtener la certificación RETIE.',

    questionFive: '5. Entrega',
    answerFive: 'Entregamos tu sistema de energía solar y te proporcionamos capacitación para que puedas llevar a cabo su monitoreo de manera efectiva.',
  }

  cardServices = {
    titleServiceOne: 'Sistema Solar On-Grid (Conectado a la Red)',
    imgServiceOne: '../../../../assets/img/tes-solar-nine.jpg',
    paragraphServiceOne: `<p>Si buscas reducir costos de energía, el sistema solar conectado a la red es ideal. Genera electricidad solar y úsala en casa o envíala a la red eléctrica convencional.</p>
    <br>
    <p>Ahorra y reduce emisiones de CO2 mientras tienes acceso constante a energía sin necesidad de baterías.</p>
    <br>
    <p>Dependencia continua de la red eléctrica convencional.`,
    

    titleServiceTwo: 'Sistema Solar Off-Grid (Desconectado de la Red)',
    imgServiceTwo: '../../../../assets/img/tes-solar-six.jpg',
    paragraphServiceTwo: `<p>Si estás pensando en independencia energética, un sistema solar off-grid es tu elección. Funciona sin conectarse a la red eléctrica convencional. La electricidad solar se almacena en baterías y se usa donde se genera.</p>
    <br>
    <p>Combinan conexión a la red con baterías para respaldo en momentos de inestabilidad. En AMP, ofrecemos dos kits:</p>
    <br>
    <p>EXAMPLE:Kit 3,68 kWh - 5 kWh: 3,68 kWp, 5 kWh almacenamiento, genera 397 kWh/mes. Requiere 21 m2.</p>
    <br>
    <p>EXAMPLE:Kit 5,52 kWh - 10 kWh: 5,52 kWp, 10 kWh almacenamiento, genera 600 kWh/mes. Requiere 37 m2.</p>`,
  }

  sectionSliderTransition = {
    personNameOne: "Name",
    businessNameOne: "Hogar", 
    paragraphOne: "Sabía que la energía solar podía ser intermitente, pero AMP nos ofreció soluciones de almacenamiento que nos permiten aprovechar al máximo la energía que generamos, incluso cuando el sol se pone",
    imageOne: "../../../../assets/img/tes-solar-six.jpg", 

    personNameTwo: "Name",
    businessNameTwo: "Hogar", 
    paragraphTwo: "Confiar en AMP para nuestra solución de energía solar ha significado que incluso en días nublados seguimos viendo los beneficios. Aunque la dependencia de la luz solar puede ser un desafío, hemos aprendido que nuestra producción de energía es resiliente.",
    imageTwo: "../../../../assets/img/tes-siessa-one-small.jpg",

    personNameThree: "Name",
    businessNameThree: "Hogar", 
    paragraphThree: "Con AMP, la dependencia de la luz solar es menos preocupante. Aunque reconocemos que la producción puede variar, su enfoque técnico en la maximización de la eficiencia nos ha asegurado un suministro constante de energía.",
    imageThree: "../../../../assets/img/tes-solar-three-re.jpg",

    personNameFour: "Name",
    businessNameFour: "Hogar", 
    paragraphFour: "Sé que la tecnología avanza rápidamente, pero AMP me proporcionó información detallada sobre cómo los paneles solares que elijo tienen un historial de rendimiento y durabilidad excepcionales.",
    imageFour: "../../../../assets/img/tes-solar-ten.jpg",
  }

}
