import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sec-services',
  templateUrl: './sec-services.component.html',
  styleUrls: ['./sec-services.component.scss']
})
export class SecServicesComponent {
  constructor(
    private titleService: Title,
    private route: ActivatedRoute
  ) {}

  containerButtonTwo = {
    width: 160,
    height: 40,
    colorBorder: 'var(--color-3)',
    backgroundColor: 'var(--color-4)',
    span: true,
    text: 'Explorar'
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const pageTitle = data['title'];
      this.titleService.setTitle(pageTitle);
    })
  }
}
