import { Component,Input } from '@angular/core';

import '@fluentui/web-components/checkbox.js';


@Component({
  selector: 'app-fluent-checkbox-wrapper',
  template: `
<fluent-checkbox [name]="name" [checked]="checked" [disabled]="disabled" > {{message}}</fluent-checkbox>
  `,
  styles: [],
})
export class CheckboxComponent {
    @Input() checked: boolean = false;
    @Input() disabled: boolean = false;
    @Input() name: string = "checkbox";
    @Input() message:string = "";
  

}