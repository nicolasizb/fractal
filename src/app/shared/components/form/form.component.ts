import { Component, AfterViewInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() dataTfWidgetListener = '';
  @Input() dataTfOpacityListener = '';
  @Input() dataTfHideHeadersListener = '';
  @Input() dataTfIframePropsListener = '';
  @Input() dataTfTransitiveSearchParamsListener = '';
  @Input() dataTfMediumListener = '';
  @Input() styleListener = '';

  constructor(
    private elementRef: ElementRef
  ) {}

  activeForm() {
    const containerForm = this.elementRef.nativeElement.querySelector('.ctf');
    const form = document.createElement('div');
    form.setAttribute("data-tf-widget", `${this.dataTfWidgetListener}`); // ccWKh9jv
    form.setAttribute("data-tf-opacity", `${this.dataTfOpacityListener}`); // 100 
    form.setAttribute("data-tf-hide-headers", `${this.dataTfHideHeadersListener}`); // 100
    form.setAttribute("data-tf-iframe-props", `${this.dataTfIframePropsListener}`); // title=Contact AMP Integral Solution
    form.setAttribute("data-tf-transitive-search-params", `${this.dataTfTransitiveSearchParamsListener}`); // ""
    form.setAttribute("data-tf-medium", `${this.dataTfMediumListener}`); // snippet
    form.setAttribute("style", `${this.styleListener}`); // width:100%;height:450px;
    containerForm.appendChild(form);
  }
  

  ngAfterViewInit() {
    this.activeForm();
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    document.body.appendChild(script);
  }
}
