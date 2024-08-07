import { Component,Input } from '@angular/core';

export type ButtonAppearance = 'accent' | 'lightweight' | 'neutral' | 'outline' | 'stealth';


@Component({
  selector: 'button-delish',
  template: `
  <fluent-button
  [appearance]="appearance"
  [attr.disabled]="disabled ? true : null"
  [attr.disabled-focusable]="disabledFocusable ? true : null"
  [attr.icon-only]="iconOnly ? true : null"
  [attr.icon]="icon"
>
  {{ content }}
</fluent-button>
  `,
  styles: [],
})
export class ButtonComponent {
  title = 'angular-latest';
  @Input() appearance: ButtonAppearance = 'accent'; 
  @Input() disabled: boolean = false;
  @Input() disabledFocusable: boolean = false;
  @Input() iconOnly: boolean = false;
  @Input() icon: string | null = null;
  @Input() content: string = 'Button';

}