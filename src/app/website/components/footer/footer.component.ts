import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  openPDF(): void {
    const url = 'https://d95q7df0kkrx0.cloudfront.net/website-media-content/Generales/Documentos/POLITICA-DE-PRIVACIDAD-DE-DATOS-V2.pdf';
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
      newWindow.focus();
    }
  }
  
}
