import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-choose-project-energy',
  templateUrl: './choose-project-energy.component.html',
  styleUrls: ['./choose-project-energy.component.scss']
})
export class ChooseProjectEnergyComponent {
  constructor(
    private route: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const pageTitle = data['title'];
      this.titleService.setTitle(pageTitle);
    })
  }
}
