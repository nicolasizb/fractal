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
    colorBorder: '#212129',
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
    img: 'https://images.pexels.com/photos/3862614/pexels-photo-3862614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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

  serviceStateOne: boolean = true;
  serviceStateTwo: boolean = false;
  serviceStateThree: boolean = false;
  serviceStateFour: boolean = false;

  serviceStateMobile: boolean = false;

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

  ngAfterViewInit() {
    this.stateWidthPage();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.stateWidthPage();
  }

  stateWidthPage() {
    if(window.innerWidth < 680) {
      this.serviceStateMobile = true;
      this.serviceStateOne = false;
      this.serviceStateTwo = false;
      this.serviceStateThree = false;
      this.serviceStateFour = false;
    } else if (this.serviceStateOne) {
      this.serviceStateMobile = false;
      this.serviceStateOne = true;
      this.serviceStateTwo = false;
      this.serviceStateThree = false;
      this.serviceStateFour = false;
    } else if (this.serviceStateTwo) {
      this.serviceStateMobile = false;
      this.serviceStateOne = false;
      this.serviceStateTwo = true;
      this.serviceStateThree = false;
      this.serviceStateFour = false;
    } else if (this.serviceStateThree) {
      this.serviceStateMobile = false;
      this.serviceStateOne = false;
      this.serviceStateTwo = false;
      this.serviceStateThree = true;
      this.serviceStateFour = false;
    } else {
      this.serviceStateMobile = false;
      this.serviceStateOne = false;
      this.serviceStateTwo = false;
      this.serviceStateThree = false;
      this.serviceStateFour = true;
    }
  }
}
