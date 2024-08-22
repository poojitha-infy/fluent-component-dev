import type { Meta, StoryObj } from '@storybook/angular';
import { RadioComponent } from './radio.component';
import { LabelPosition } from '../other.options';

const meta: Meta<RadioComponent> = {
    title: 'Fluent/Radio',
    component: RadioComponent,
    tags: ['autodocs'],
      argTypes: {
        id: { control: 'text' },
        name: { control: 'text' },
        checked: {
            description: 'Sets the checked state of the checkbox',
            control: 'boolean',
          },
          disabled: {
            description: 'Sets the disabled state of the checkbox',
            control: 'boolean',
          },
          labelPosition: {
            control: { type: 'select', options: Object.values(LabelPosition) },
          },
          message: { control: 'text' },
      }
  };

  export default meta;
  type Story = StoryObj<RadioComponent>;

  export const Radio: Story = {
  render: (args: RadioComponent) => ({
    template: `<fluent-radio [name]="name" [id]="id"></fluent-radio>`,
    props: args,
  }),
  args: {
    id: 'radio1',
    name: 'example',
  },
};
export const RadioChecked: Story = {
  render: (args: RadioComponent) => ({
    template: `<fluent-radio [name]="name" [id]="id" [checked]="checked"></fluent-radio>`,
    props: args,
  }),
  args: {
    id: 'radio2',
    name: 'example2',
    checked: true,
  },
};

    
  export const RadioWithText: Story = {
    render: (args: RadioComponent) => ({
      template: `<fluent-field label-position="after">
      <label slot="label">Disabled Radio</label>
    <fluent-radio slot="input" [disabled]="disabled" tabindex="-1" value="Disabled Radio"></fluent-radio>
    </fluent-field>`,
      props: args,
    }),
    args: {
        id: 'radio3',
        name: 'example3',
        disabled:true,
        labelPosition:LabelPosition.after
    },
  };


  export const RadioAsFieldText: Story = {  
    render: (args: RadioComponent) => ({
      template: `<fluent-field label-position="after">
      <label slot="label">Apple</label>
    <fluent-radio slot="input" id="radio-29" value="Apple"></fluent-radio>
    </fluent-field>`,
      props: args,
    }),
    args: {
        id: 'radio4',
        name: 'example4',
        checked: true,
        labelPosition:LabelPosition.after
    },
  };
 