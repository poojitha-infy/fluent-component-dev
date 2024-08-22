import { Component, Input } from '@angular/core';
import { MessageBarShape, MessageBarLayout, MessageBarIntent } from './message-bar.options';
import '@fluentui/web-components/message-bar.js';
import { html } from '@microsoft/fast-element';

@Component({
  selector: 'app-message-bar',
  templateUrl: './message-bar.component.html',
  styleUrls: []
})
export class MessageBarComponent {
  @Input() content: string = '';
  @Input() shape: MessageBarShape = MessageBarShape.rounded;
  @Input() layout: MessageBarLayout = MessageBarLayout.singleline;
  @Input() intent: MessageBarIntent = MessageBarIntent.info;
  @Input() ariaLive?: string;
  @Input() ariaLabelledBy?: string;

   infoIcon = html`
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10ZM9.50806 8.91012C9.55039 8.67687 9.75454 8.49999 10 8.49999C10.2455 8.49999 10.4496 8.67687 10.4919 8.91012L10.5 8.99999V13.5021L10.4919 13.592C10.4496 13.8253 10.2455 14.0021 10 14.0021C9.75454 14.0021 9.55039 13.8253 9.50806 13.592L9.5 13.5021V8.99999L9.50806 8.91012ZM9.25 6.74999C9.25 6.33578 9.58579 5.99999 10 5.99999C10.4142 5.99999 10.75 6.33578 10.75 6.74999C10.75 7.16421 10.4142 7.49999 10 7.49999C9.58579 7.49999 9.25 7.16421 9.25 6.74999Z"
      fill="#616161"
    />
  </svg>
`;
}
