import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-civil-work',
  templateUrl: './civil-work.component.html',
  styleUrls: ['./civil-work.component.scss']
})
export class CivilWorkComponent {

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
  containerButtonTwo = {
    width: 210,
    height: 48,
    colorBorder: 'var(--color-5)',
    backgroundColor: 'var(--color-gray)',
    span: true,
    text: 'Cotizar'
  }

  linkPage = '/servicios/obra-civil/contacto';

  containerHeadPageService = {
    title: 'Obra civil',
    paragraph:'Colaboramos contigo para transformar visiones en realidades construidas.',
    imgContainer: '../../../../assets/img/cover-civil-work.jpg'
  }

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
    title: 'Abordamos tus Preocupaciones de Manera Concreta',
    paragraph: 'Haz clic en ¡Empecemos! Nuestra experiencia y soluciones técnicas se adaptan a tus objetivos.',
    img: '../../../../assets/vector/vector-women-solar-planet-drop.svg'
  }

  cardServices = {
    titleServiceOne: 'Diseños y cálculos',
    imgServiceOne: '../../../../assets/img/tes-civil-work-one.jpg',
    paragraphServiceOne: `<p>Planificación y construcción de infraestructuras de pequeña escala.</p>
    <br>
    <p>Los diseños detallados consideran aspectos funcionales, estéticos y de seguridad, estableciendo planos y especificaciones.</p>
    <br>
    <p>Estos procesos son esenciales para una construcción exitosa y duradera.</p>`,

    titleServiceTwo: 'Elaboración Obra in Situ',
    imgServiceTwo: '../../../../assets/img/tes-civil-work-two.jpg',
    paragraphServiceTwo: `<p>Abarca trabajos realizados directamente en el lugar donde se está construyendo la infraestructura, en contraste con la fabricación externa y montaje posterior.</p>
    <br>
    <p>Esto asegura adaptación precisa a las condiciones del terreno y lograr una integración precisa en el entorno.</p>`,

    titleServiceThree: 'Interventoría de obra',
    imgServiceThree: '../../../../assets/img/tes-civil-work-three.jpg',
    paragraphServiceThree: `<p>Supervisión y control de un proyecto de construcción para asegurar que se cumplan diseños, plazos y estándares establecidos.</p>
    <br>
    <p>Garantiza calidad y cumplimiento contractual.</p>`,

    titleServiceFour: 'Consultoría',
    imgServiceFour: '../../../../assets/img/tes-civil-work-four.jpg',
    paragraphServiceFour: `<p>Asesoramiento y supervisión técnica en proyectos de construcción, asegurando calidad y éxito en la ejecución.</p>
    <br>
    <p>Garantizando el cumplimiento de estándares y cumplimiento de estándares técnicos y de seguridad.</p>`,
  }

  sectionSliderTransition = {
    personNameOne: "Name",
    businessNameOne: "Vigilancia Acosta", 
    paragraphOne: "Decidimos hacer nuestra propia remodelación del garaje, pero los problemas de calidad nos superaron. Luego contratamos a AMP, quienes utilizaron su experiencia técnica para corregir los problemas.",
    imageOne: "../../../../assets/img/tes-civil-work-six.jpg",

    personNameTwo: "Name",
    businessNameTwo: "Fiscalía General de la Nación", 
    paragraphTwo: "Teníamos expectativas específicas para nuestro proyecto de renovación. Trabajaron en estrecha colaboración con nosotros, ajustaron el diseño según nuestras preferencias y se comunicaron constantemente para asegurarse de que el resultado final fuera justo como lo habíamos imaginado.",
    imageTwo: "../../../../assets/img/tes-civil-work-five.jpg",

    personNameThree: "Name",
    businessNameThree: "Business", 
    paragraphThree: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia esse, sit quisquam provident vero omnis repellat aliquam! At ut voluptate, debitis porro quod iure accusantium et sed beatae provident numquam!",
    imageThree: "",

    personNameFour: "Name",
    businessNameFour: "Vigilancia Acosta", 
    paragraphFour: "Decidimos hacer nuestra propia remodelación del garaje, pero los problemas de calidad nos superaron. Luego contratamos a AMP, quienes utilizaron su experiencia técnica para corregir los problemas.",
    imageFour: "../../../../assets/img/tes-civil-work-six.jpg",
  }

}
