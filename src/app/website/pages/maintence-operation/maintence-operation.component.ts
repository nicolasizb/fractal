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
    colorBorder: 'var(--color-dark)',
    backgroundColor: 'var(--color-5)',
    span: true,
    text: 'Empecemos'
  } 

  containerButtonTwo = {
    width: 210,
    height: 48,
    colorBorder: 'var(--color-5)',
    backgroundColor: '#F7F7F5',
    span: true,
    text: 'Cotizar'
  }

  linkPage = '/servicios/operacion-y-mantenimiento/contacto';

  containerHeadPageService = {
    title: 'Operacion y mantenimiento',
    paragraph:'No comprometas la calidad',
    imgContainer: '../../../../assets/img/tes-swimming-pool-eleven.jpg'
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
    title: '¿Tienes resistencia al cambio?',
    paragraph: 'Haz clic en ¡Empecemos! Y Descubre cómo nuestra solución transformará tus operaciones y ayuda a tu equipo a adaptarse sin esfuerzo.',
    img: '../../../../assets/vector/vector-women-solar-planet-drop.svg'
  }

  
  cardServices = {
    titleServiceOne: 'Automatización',
    imgServiceOne: '../../../../assets/vector/vector-automation.svg',
    paragraphServiceOne: `<p>Usamos tecnología para automatizar tareas como seguimiento de ubicación, mantenimiento predictivo y control de inventario.</p>
    <br>
    <p>Esto mejora la eficiencia al reducir la necesidad de intervención humana constante y permite un mejor uso y mantenimiento de los activos.</p>`,
    
    
    titleServiceTwo: 'Monitoreo',
    imgServiceTwo: '../../../../assets/vector/vector-monitoring.svg',
    paragraphServiceTwo: `<p>Observamos constantemente el estado, ubicación y uso de los activos usando tecnología como sensores.</p>
    <br>
    <p>Ayuda a mantener los activos en buen estado, prevenir problemas y tomar decisiones basadas en datos en tiempo real.</p>`,
    
    titleServiceThree: 'Mantenimiento y servicios',
    imgServiceThree: '../../../../assets/vector/vector-maintence.svg',
    paragraphServiceThree: `<p>Cuidado y reparación de activos de forma planificada para prevenir problemas y mejorar su rendimiento.</p>
    <br>
    <p>Esto abarca mantenimiento preventivo (antes de fallas), correctivo (tras fallas) y predictivo (basado en datos).</p>
    <br>
    <p>Además, proporcionamos el suministro de soporte, repuestos y la optimización de recursos para mantener los activos en buen estado y en funcionamiento óptimo.</p>`,
    
    titleServiceFour: 'Administración',
    imgServiceFour: '../../../../assets/vector/vector-managment.svg',
    paragraphServiceFour: `<p>Administramos de forma eficiente y estratégica los activos de una organización, tales como sistemas de energía solar, piscinas y proyectos de construcción a pequeña escala, a lo largo de su ciclo de vida.</p>
    <br>
    <p>Esto implica tomar decisiones inteligentes sobre adquisición, mantenimiento, actualización y desinversión con el fin de maximizar su valor y rendimiento.</p>`,
  }
}
