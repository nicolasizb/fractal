import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maintence-operation',
  templateUrl: './maintence-operation.component.html',
  styleUrls: ['./maintence-operation.component.scss']
})
export class MaintenceOperationComponent {

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
    colorBorder: '#212129',
    backgroundColor: '#F0AE20',
    span: true,
    text: 'Empecemos'
  } 

  containerButtonTwo = {
    width: 210,
    height: 48,
    colorBorder: '#F0AE20',
    backgroundColor: '#F7F7F5',
    span: true,
    text: 'Cotizar'
  }

  linkPage = '/servicios/operacion-y-mantenimiento/contacto';

  containerHeadPageService = {
    title: 'Gestión de activos',
    paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, tempora facilis cupiditate vel atque repellat.',
    imgContainer: '../../../../assets/img/build.jpg'
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
    title: 'Quiero energía limpia económica y digital',
    paragraph: 'Haz clic en ¡Sí quiero! para unirte al ecosistema de energía de ERCO o en conversemos para que un experto resuelva tus dudas.',
    img: 'https://images.pexels.com/photos/3862614/pexels-photo-3862614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }

  
  cardServices = {
    titleServiceOne: 'Automatización',
    imgServiceOne: '../../../../assets/img/build.jpg',
    paragraphServiceOne: `<p>Si tu propósito es lograr ahorros en la factura de energía, un sistema interconectado es el ideal para ti, podrás generar hasta el 100% de tus consumos energéticos mientras disminuyes tus emisiones de CO2.</p>
    <br>
    <p>Estos sistemas funcionan en paralelo con la red eléctrica convencional y te permiten un flujo constante de energía.</p>
    <br>
    <p>Los sistemas interconectados no generan un respaldo de energía ya que no cuentan con baterías.</p>`,
    
    
    titleServiceTwo: 'Monitoreo',
    imgServiceTwo: '../../../../assets/img/build.jpg',
    paragraphServiceTwo: `<p>2 Si tu propósito es lograr ahorros en la factura de energía, un sistema interconectado es el ideal para ti, podrás generar hasta el 100% de tus consumos energéticos mientras disminuyes tus emisiones de CO2.</p>
    <br>
    <p>2 Estos sistemas funcionan en paralelo con la red eléctrica convencional y te permiten un flujo constante de energía.</p>
    <br>
    <p>2 Los sistemas interconectados no generan un respaldo de energía ya que no cuentan con baterías.</p>`,
    
    titleServiceThree: 'Mantenimiento y servicios',
    imgServiceThree: '../../../../assets/img/build.jpg',
    paragraphServiceThree: `<p>3 Si tu propósito es lograr ahorros en la factura de energía, un sistema interconectado es el ideal para ti, podrás generar hasta el 100% de tus consumos energéticos mientras disminuyes tus emisiones de CO2.</p>
    <br>
    <p>3 Estos sistemas funcionan en paralelo con la red eléctrica convencional y te permiten un flujo constante de energía.</p>
    <br>
    <p>3 Los sistemas interconectados no generan un respaldo de energía ya que no cuentan con baterías.</p>`,
    
    titleServiceFour: 'Administración',
    imgServiceFour: '../../../../assets/img/build.jpg',
    paragraphServiceFour: `<p>4 Si tu propósito es lograr ahorros en la factura de energía, un sistema interconectado es el ideal para ti, podrás generar hasta el 100% de tus consumos energéticos mientras disminuyes tus emisiones de CO2.</p>
    <br>
    <p>4 Estos sistemas funcionan en paralelo con la red eléctrica convencional y te permiten un flujo constante de energía.</p>
    <br>
    <p>4 Los sistemas interconectados no generan un respaldo de energía ya que no cuentan con baterías.</p>`,
  }

  sectionStepsToFollow = {
    questionOne: '1. Firma del contrato',
    answerOne: 'Te entregamos los documentos, apruebas el contrato y te hacemos la introducción a ErcoApp.',

    questionTwo: '2. Diseñamos tu propuesta',
    answerTwo: 'Programamos una visita de ingeniería de detalle y realizamos la compra de tus equipos.',

    questionThree: '3. Instalamos tu proyecto',
    answerThree: 'Construimos tu proyecto siguiendo los cronogramas con personal propio y calificado.',

    questionFour: '4. Gestionamos la certificación',
    answerFour: 'Enviamos documentación y programamos visita para la legalización y la certificación RETIE.',

    questionFive: '5. Tu primer kilovatio',
    answerFive: 'Te entregamos tu sistema solar y te capacitamos en nuestra aplicación de monitoreo.',
  }
}
