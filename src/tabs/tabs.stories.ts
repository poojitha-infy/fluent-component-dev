import { TabsList } from '../other.options';
import { TabsComponent } from './tabs.component';
import { Meta, StoryObj } from '@storybook/angular';



  export default {
    title: 'Fluent/Tabs',
    component: TabsComponent,
    tags: ['autodocs'],
  } as Meta<TabsComponent>;

  const Template: StoryObj<TabsComponent> = {
    render: (args: TabsComponent) => ({
      props: args,
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
    }),
  };
  
  export const Default: StoryObj<TabsComponent> = {
    ...Template,
    args: {
      activeId: 'first-tab',
    },
  };


