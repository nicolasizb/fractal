import { Component, OnInit } from '@angular/core';
import { DataInfoPageService } from 'src/app/services/data-info-page.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  selectTextOne = "¡Cotizar ahora!";

  containerButton = {
    width: 210,
    height: 48,
    colorBorder: '#212129',
    backgroundColor: '#F0AE20'
  }

  menuButtonStatus: true | false = false;

  toggleMenu() {
    this.menuButtonStatus = !this.menuButtonStatus;
    console.log('status ==>', this.menuButtonStatus)
  }
}
