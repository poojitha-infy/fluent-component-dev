import { Component,Input } from '@angular/core';
import '@fluentui/web-components/switch.js';
import { LabelPosition } from '../other.options';

@Component({
  selector: 'app-fluent-switct-wrapper',
  template: `
  <fluent-switch [checked]="checked" [id]="id" name="switch" slot="input"></fluent-switch>
  `,
  styles: [],
})
export class SwitchComponent {
    @Input() checked: boolean = false;
    @Input() disabled: boolean = false;
    @Input() required: boolean = false;
    @Input() label: string = '';
    @Input() id: string = '';
    @Input() labelPosition: LabelPosition = LabelPosition.after;
    @Input() name: string = '';

}