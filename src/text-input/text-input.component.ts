import { Component, Input } from '@angular/core';
import '@fluentui/web-components/text-input.js';

@Component({
  selector: 'app-text-input',
  template: `
   <div class="text-input">
   <ng-content select="[fluent-text-input]">
   <ng-content select="[fluent-label]"></ng-content>
   </ng-content>
   

   </div>
  `,
})
export class TextInputComponent {
  @Input() appearance: string='';
  @Input() autocomplete: string='';
  @Input() autofocus: boolean=false;
  @Input() controlSize: string='';
  @Input() dirname: string='';
  @Input() disabled: boolean=false;
  @Input() form: string='';
  @Input() list: string='';
  @Input() maxlength: number=0;
  @Input() minlength: number=0;
  @Input() multiple: boolean=false;
  @Input() name: string='';
  @Input() pattern: string='';
  @Input() placeholder: string='';
  @Input() readOnly: boolean=false;
  @Input() required: boolean=false;
  @Input() size: string='';
  @Input() spellcheck: boolean=false;
  @Input() type: string='';
  @Input() value: string='';
  @Input() label: string='';
}
