import { Component,Input } from '@angular/core';
import '@fluentui/web-components/tabs.js';

export type TabsList = 'apps' | 'entrees' | 'desserts';

@Component({
  selector: 'app-fluent-tabs-wrapper',
  template: `
  <fluent-tabs orientation="horizontal" appearance="subtle" size="small">
  <fluent-tab id="first-tab"> First Tab </fluent-tab>
  <fluent-tab id="second-tab"> Second Tab</fluent-tab>
  <fluent-tab id="third-tab"> Third Tab</fluent-tab>
  <fluent-tab id="fourth-tab"> Fourth Tab</fluent-tab>

  <fluent-tab-panel id="first-tab-panel">Tab One Content</fluent-tab-panel>
  <fluent-tab-panel id="second-tab-panel">Tab Two Content</fluent-tab-panel>
  <fluent-tab-panel id="third-tab-panel">Tab Three Content</fluent-tab-panel>
  <fluent-tab-panel id="fourth-tab-panel">Tab Four Content</fluent-tab-panel>
</fluent-tabs>

`,
  styles: [],
})
export class TabsComponent {
    // @Input() activeId: TabsList = 'desserts';
    @Input() activeId: string = '';

}