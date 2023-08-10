import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-energy-business',
  templateUrl: './project-energy-business.component.html',
  styleUrls: ['./project-energy-business.component.scss']
})
export class ProjectEnergyBusinessComponent {

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

  containerButtonOne = {
    width: 210,
    height: 48,
    colorBorder: 'var(--color-dark)',
    backgroundColor: 'var(--color-5)',
    span: true,
    text: 'Empecemos'
  }

  linkPage = '/servicios/proyectos-energia-solar/contacto';

  containerHeadPageService = {
    title: 'Energía solar para empresas',
    titleColor: 'var(--color-5)',
    paragraph:'Enfocados en tu empresa: Creamos soluciones integrales a medida para satisfacer tus necesidades específicas',
    imgContainer: '../../../../assets/img/cover-business-amp.jpg'
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
    title: 'Soluciones a la medida.',
    paragraph: 'Haz clic en ¡Empecemos! Nuestra experiencia y soluciones técnicas se adaptan a los objetivos de tu empresa.',
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
    imgServiceOne: '../../../../assets/img/tes-gaiga-small.jpg',
    paragraphServiceOne: `<p>Son perfectos para permitirte generar la totalidad de la energía por ti mismo, lo que te posibilitará recuperar el valor invertido en un plazo de 2 a 5 años.</p>
    <br>
    <p>Podrás liberar liquidez para reinvertir en tu empresa, gracias a los incentivos fiscales y a la venta de excedentes de energía.</p>
    <br>
    <p>Estos dispositivos están conformados por paneles solares que operan en simultáneo con la red eléctrica convencional, asegurándote un suministro ininterrumpido de energía.</p>`,

    titleServiceTwo: 'Sistema Solar Off-Grid (Desconectado de la Red)',
    imgServiceTwo: '../../../../assets/img/tes-solar-eleven.jpg',
    paragraphServiceTwo: `<p>Son perfectos si tu suministro eléctrico es irregular y buscas garantizar la continuidad de tus equipos.</p>
    <br>
    <p>Almacenas energía para adaptarla a tu consumo y recortas gastos al reducir la dependencia de la red.</p>
    <br>
    <p>Accederás a beneficios fiscales y generarás ahorros para tu negocio. Se compone de un sistema interconectado con baterías y necesita conexión a la red eléctrica convencional.</p>`,
  }

  sectionSliderTransition = {
    personNameOne: "Name",
    businessNameOne: "Empresa", 
    paragraphOne: "Las políticas pueden ser confusas, pero AMP me proporcionó información actualizada sobre los incentivos fiscales y las tarifas de alimentación a la red, lo que me dio confianza en mi elección.",
    imageOne: "../../../../assets/img/tes-solar-five.jpg",

    personNameTwo: "Name",
    businessNameTwo: "Empresa", 
    paragraphTwo: "Nuestro edificio tenía un diseño complicado, por lo que no estaba seguro de si sería posible instalar paneles solares. AMP demostró que pueden adaptarse a cualquier diseño y encontrar la mejor manera de aprovechar al máximo el espacio disponible.",
    imageTwo: "../../../../assets/img/tes-solar-four.jpg",

    personNameThree: "Name",
    businessNameThree: "Empresa", 
    paragraphThree: "Tener un espacio limitado nos hizo pensar que la energía solar no era una opción. Gracias a AMP, pudimos encontrar soluciones creativas para instalar paneles solares en áreas que ni siquiera habíamos considerado",
    imageThree: "../../../../assets/img/tes-solar-fourteen.jpg",

    personNameFour: "Name",
    businessNameFour: "Empresa", 
    paragraphFour: "Contratar a AMP para nuestra instalación de energía solar fue una inversión que valió la pena. Aunque hubo un costo inicial, rápidamente notamos los beneficios en nuestras facturas de electricidad más bajas y la independencia energética que ahora disfrutamos.",
    imageFour: "../../../../assets/img/tes-gaiga-small.jpg",
  }
}
