import { Meta, StoryObj } from '@storybook/angular';
import { SwitchComponent } from './switch.component';
import { LabelPosition } from '../other.options';

const meta: Meta<SwitchComponent> = {
  title: 'Fluent/Switch',
  component: SwitchComponent,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      description: 'Sets the checked state of the switch',
      control: 'boolean',
    },
    disabled: {
      description: 'Sets the disabled state of the switch',
      control: 'boolean',
    },
    required: {
      description: 'Sets the switch as required',
      control: 'boolean',
    },
    labelPosition: {
      control: { type: 'select', options: Object.values(LabelPosition) },
    },
    label: {
      description: 'Sets the label for the switch',
      control: 'text',
    },
    name: {
      description: 'Sets the name of the switch',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<SwitchComponent>;

// Basic switch story
export const Switch: Story = {
  render: (args: SwitchComponent) => ({
    template: `<fluent-switch [id]="id" [name]="name"></fluent-switch>`,
    props: args,
  }),
  args: {
    id: 'switch-id',
    name: 'switch',
    // checked: false,
    // disabled: false,
    // required: false,
    // labelPosition: LabelPosition.after,
    // label: 'Default Label',
  },
};

// Checked switch story
export const Checked: Story = {
  render: (args:SwitchComponent) => ({
    template: `<fluent-switch [id]="id" [name]="name" [checked]="checked" slot="input"></fluent-switch>`,
    props: args,
  }),
  args: {
    id: 'switch-checked-id',
    name: 'switch',
    checked: true,
    // disabled: false,
    // required: false,
    // label: 'Checked (default)',
    // labelPosition: LabelPosition.after,
  },
};

// Disabled switch stories
export const Disabled: Story = {
  render: (args:SwitchComponent) => ({
    template: `
      <div>
        <div>
          <fluent-switch [id]="'switch-disabled-1'" disabled="true" checked="false"></fluent-switch>
          <label for="switch-disabled-1">Disabled unchecked</label>
        </div>
        <div>
          <fluent-switch [id]="'switch-disabled-2'" disabled="true" checked="true"></fluent-switch>
          <label for="switch-disabled-2">Disabled checked</label>
        </div>
      </div>
    `,
    props: args,
  }),
  args: {
    id: 'switch-checked-id',
    name: 'switch',
    checked: true,
    disabled: false,
    required: false,
    label: 'Checked (default)',
    labelPosition: LabelPosition.after,
  },
};

// Required switch story
export const Required: Story = {
  render: (args:SwitchComponent) => ({
    template: `
      <form style="display: inline-flex; gap: 1em; align-items: baseline">
        <div>
          <fluent-switch id="required-switch" required="true"></fluent-switch>
          <label for="required-switch">Required</label>
        </div>
        <fluent-switch [id]="id" required="true" labelPosition="after" [label]="label"></fluent-switch>
        <button type="submit">Submit</button>
      </form>
    `,
    props: args,
  }),
  args: {
    id: 'switch-required-id',
    required:true,
    labelPosition: LabelPosition.after,
    label: 'Required Label',
  },
};

// Label before switch story
export const LabelBefore: Story = {
  render: (args:SwitchComponent) => ({
    template: `
    <fluent-field [label-position]="before">
    <label slot="label" [for]="id">Label before</label>
    
  <fluent-switch [id]="id" name="switch" slot="input"></fluent-switch>
  </fluent-field>
  
    `,
    props: args,
  }),
  args: {
    id: 'switch-label-before-id',
    name: 'switch',
    labelPosition: LabelPosition.before,
    label: 'Label before',
  },
};

// // Label wrapping switch story
// export const LabelWrapping: Story = {
//   render: (args:SwitchComponent) => ({
//     template: `<fluent-switch [id]="id" [name]="name" [labelPosition]="labelPosition" [label]="label"></fluent-switch>`,
//     props: args,
//   }),
//   args: {
//     id: 'switch-label-wrapping-id',
//     name: 'switch',
//     labelPosition: LabelPosition.after,
//     label: 'Here is an example of a switch with a long label and it starts to wrap to a second line',
//   },
//   decorators: [
//     (story: () => HTMLElement) => {
//       const storyElement = story() as HTMLElement;
//       storyElement.style.width = '400px';
//       return storyElement;
//     },
//   ],
// };
