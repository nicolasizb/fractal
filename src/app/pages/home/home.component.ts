import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  containerButtonOne = {
    width: 210,
    height: 48,
    colorBorder: '#212129',
    backgroundColor: '#F0AE20',
    span: false,
    text: 'Quiero cotizar'
  } 

  containerButtonTwo = {
    width: 160,
    height: 40,
    colorBorder: '#212129',
    backgroundColor: '#F0AE20',
    span: true,
    text: 'Explorar'
  }

  containerButtonThree = {
    width: 210,
    height: 48,
    colorBorder: '#F7F7F5',
    backgroundColor: '#F0AE20',
    span: false,
    text: '¡Sí quiero!'
  }

  containerButtonFour = {
    width: 210,
    height: 48,
    colorBorder: '#F0AE20',
    backgroundColor: '#F7F7F5',
    span: true,
    text: 'Conversemos'
  }

}
