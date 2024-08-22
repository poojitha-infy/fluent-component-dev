import { Component,Input } from '@angular/core';
import '@fluentui/web-components/radio.js';
import { LabelPosition } from '../other.options';

export type OrientationTypes  = 'vertical' | 'horizontal';




@Component({
  selector: 'app-fluent-radio-wrapper',
  template: `
  <fluent-field [label-position]="labelPosition">
      <label slot="label">{{message}}</label>
      <fluent-radio [name]="name" [id]="id" [checked]="checked" [disabled]="disabled" ></fluent-radio>
    </fluent-field>
  `,
  styles: [],
})
export class RadioComponent {
    @Input() orientation:OrientationTypes = "vertical";
    @Input() id: string="";
    @Input() name: string="";
    @Input() checked: boolean = false;
    @Input() disabled: boolean = false;
    @Input() message:string = "";
    @Input() labelPosition: LabelPosition = LabelPosition.after;

  

}