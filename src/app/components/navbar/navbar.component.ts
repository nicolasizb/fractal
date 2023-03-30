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
    height: 48
  }

  constructor(
    private dataInfoPage: DataInfoPageService
  ) {
    
  }

}
