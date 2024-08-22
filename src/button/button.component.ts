import { Component,Input } from '@angular/core';
import '@fluentui/web-components/button.js';


export type ButtonAppearance = 'accent' | 'lightweight' | 'neutral' | 'outline' | 'stealth';


@Component({
  selector: 'app-fluent-button-wrapper',
  template: `
  <fluent-button
  [appearance]="appearance"
  [attr.disabled]="disabled ? true : null"
  [attr.disabled-focusable]="disabledFocusable ? true : null"
  [attr.icon-only]="iconOnly ? true : null"
  [attr.icon]="icon"
  (click)="onClick()"
>
  {{ content }}
</fluent-button>

  `,
  styles: [],
})
export class ButtonComponent {
  @Input() appearance: ButtonAppearance = 'accent'; 
  @Input() disabled: boolean = false;
  @Input() disabledFocusable: boolean = false;
  @Input() iconOnly: boolean = false;
  @Input() icon: string | null = null;
  @Input() content: string = 'Button';


  exampleTextField = '';

  onClick() {
    console.log(this.exampleTextField);
  }
  

}