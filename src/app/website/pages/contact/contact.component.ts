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
    paragraphOne: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia esse, sit quisquam provident vero omnis repellat aliquam! At ut voluptate, debitis porro quod iure accusantium et sed beatae provident numquam!",
    imageOne: "../../../../assets/img/tes-curz-roja-three.jpg",

    personNameTwo: "Name",
    businessNameTwo: "SIESSA", 
    paragraphTwo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia esse, sit quisquam provident vero omnis repellat aliquam! At ut voluptate, debitis porro quod iure accusantium et sed beatae provident numquam!",
    imageTwo: "../../../../assets/img/tes-siessa-one-small.jpg",

    personNameThree: "Name",
    businessNameThree: "Centro de Salvamento Acuático Cruz Roja", 
    paragraphThree: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia esse, sit quisquam provident vero omnis repellat aliquam! At ut voluptate, debitis porro quod iure accusantium et sed beatae provident numquam!",
    imageThree: "../../../../assets/img/tes-swimming-pool-small.jpg",

    personNameFour: "Name",
    businessNameFour: "GAIAG", 
    paragraphFour: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia esse, sit quisquam provident vero omnis repellat aliquam! At ut voluptate, debitis porro quod iure accusantium et sed beatae provident numquam!",
    imageFour: "../../../../assets/img/tes-gaiga-small.jpg",
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const pageTitle = data['title'];
      this.titleService.setTitle(pageTitle);
    });
  }
}
