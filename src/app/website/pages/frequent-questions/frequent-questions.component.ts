import { Component } from '@angular/core';
import { DataInfoPageService } from 'src/app/services/data-info-page.service';

import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-frequent-questions',
  templateUrl: './frequent-questions.component.html',
  styleUrls: ['./frequent-questions.component.scss']
})
export class FrequentQuestionsComponent {

  constructor(
    private dataInfoPageService: DataInfoPageService,
    private titleService: Title,
    private route: ActivatedRoute
  ) {}

  accordions = [{
    question: '',
    answer: ''
  }];

  ngOnInit(): void {
    this.accordions = this.dataInfoPageService.getFrequentQuestions();

    this.route.data.subscribe(data => {
      const pageTitle = data['title'];
      this.titleService.setTitle(pageTitle);
    });
  }
}
