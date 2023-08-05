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
    colorBorder: '#11111F',
    backgroundColor: '#3B9D81',
    span: true,
    text: 'Cotizar'
  };

  colorLayout = '#3B9D81';

  linkPage = '/servicios/piscinas/contacto';

  containerHeadPageService = {
    title: 'Piscinas',
    titleColor: '#3B9D81',
    paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, tempora facilis cupiditate vel atque repellat.',
    imgContainer: '../../../../assets/img/swimming-pool.jpg'
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
    title: 'Quiero energía limpia económica y digital',
    paragraph: 'Haz clic en ¡Sí quiero! para unirte al ecosistema de energía de ERCO o en conversemos para que un experto resuelva tus dudas.',
    img: '../../../../assets/img/amp-cover-women.jpg'
  };

  cardServices = {
    titleServiceOne: 'Administración',
    imgServiceOne: '../../../../assets/img/swimming-pool.jpg',
    paragraphServiceOne: `<p>Si tu propósito es lograr ahorros en la factura de energía, un sistema interconectado es el ideal para ti, podrás generar hasta el 100% de tus consumos energéticos mientras disminuyes tus emisiones de CO2.</p>
    <br>
    <p>Estos sistemas funcionan en paralelo con la red eléctrica convencional y te permiten un flujo constante de energía.</p>
    <br>
    <p>Los sistemas interconectados no generan un respaldo de energía ya que no cuentan con baterías.</p>`,
    

    titleServiceTwo: 'Asesoría',
    imgServiceTwo: '../../../../assets/img/swimming-pool.jpg',
    paragraphServiceTwo: `<p>2 Si tu propósito es lograr ahorros en la factura de energía, un sistema interconectado es el ideal para ti, podrás generar hasta el 100% de tus consumos energéticos mientras disminuyes tus emisiones de CO2.</p>
    <br>
    <p>2 Estos sistemas funcionan en paralelo con la red eléctrica convencional y te permiten un flujo constante de energía.</p>
    <br>
    <p>2 Los sistemas interconectados no generan un respaldo de energía ya que no cuentan con baterías.</p>`,

    titleServiceThree: 'Control y dosificación',
    imgServiceThree: '../../../../assets/img/swimming-pool.jpg',
    paragraphServiceThree: `<p>3 Si tu propósito es lograr ahorros en la factura de energía, un sistema interconectado es el ideal para ti, podrás generar hasta el 100% de tus consumos energéticos mientras disminuyes tus emisiones de CO2.</p>
    <br>
    <p>3 Estos sistemas funcionan en paralelo con la red eléctrica convencional y te permiten un flujo constante de energía.</p>
    <br>
    <p>3 Los sistemas interconectados no generan un respaldo de energía ya que no cuentan con baterías.</p>`,

    titleServiceFour: 'Desinfección',
    imgServiceFour: '../../../../assets/img/swimming-pool.jpg',
    paragraphServiceFour: `<p>4 Si tu propósito es lograr ahorros en la factura de energía, un sistema interconectado es el ideal para ti, podrás generar hasta el 100% de tus consumos energéticos mientras disminuyes tus emisiones de CO2.</p>
    <br>
    <p>4 Estos sistemas funcionan en paralelo con la red eléctrica convencional y te permiten un flujo constante de energía.</p>
    <br>
    <p>4 Los sistemas interconectados no generan un respaldo de energía ya que no cuentan con baterías.</p>`,
  }

  sectionSliderTransition = {
    personNameOne: "Name",
    businessNameOne: "Centro de Salvamento Acuático Cruz Roja", 
    paragraphOne: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia esse, sit quisquam provident vero omnis repellat aliquam! At ut voluptate, debitis porro quod iure accusantium et sed beatae provident numquam!",
    imageOne: "../../../../assets/img/tes-curz-roja-three.jpg",

    personNameTwo: "Name",
    businessNameTwo: "SIESSA", 
    paragraphTwo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia esse, sit quisquam provident vero omnis repellat aliquam! At ut voluptate, debitis porro quod iure accusantium et sed beatae provident numquam!",
    imageTwo: "../../../../assets/img/tes-siessa-one-small.jpg",

    personNameThree: "Name",
    businessNameThree: "Business", 
    paragraphThree: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia esse, sit quisquam provident vero omnis repellat aliquam! At ut voluptate, debitis porro quod iure accusantium et sed beatae provident numquam!",
    imageThree: "../../../../assets/img/tes-swimming-pool-small.jpg",

    personNameFour: "Name",
    businessNameFour: "GAIAG", 
    paragraphFour: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia esse, sit quisquam provident vero omnis repellat aliquam! At ut voluptate, debitis porro quod iure accusantium et sed beatae provident numquam!",
    imageFour: "../../../../assets/img/tes-gaiga-small.jpg",
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
