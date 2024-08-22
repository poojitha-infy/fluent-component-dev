import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';


const meta: Meta<CheckboxComponent> = {
    title: 'Fluent/Checkbox',
    component: CheckboxComponent,
    tags: ['autodocs'],
    args: {
        name: 'checkbox',
      },
      argTypes: {
        checked: {
            description: 'Sets the checked state of the checkbox',
            control: 'boolean',
          },
          disabled: {
            description: 'Sets the disabled state of the checkbox',
            control: 'boolean',
          },
          message: { control: 'text' },
      }
  };

  export default meta;
  type Story = StoryObj<CheckboxComponent>;

    
  export const CheckboxWithText: Story = {
    render: (args: CheckboxComponent) => ({
      template: `<fluent-field label-position="before">
      <label slot="label" for="checkbox-16">Label before</label>
    <fluent-checkbox id="checkbox-16" name="checkbox" slot="input"></fluent-checkbox>
    </fluent-field>`,
      props: args,
    }),
    args: {
        checked: true,
        message:'Checked by default'
    },
  };
  export const CheckboxWithoutText: Story = {
    render: (args: CheckboxComponent) => ({
      template: `
    <fluent-checkbox id="checkbox-17" name="checkbox" slot="input" [checked]=checked></fluent-checkbox>
   `,
      props: args,
    }),
    args: {
      checked: true
    },
  };
  export const unChecked: Story = {
    render: (args: CheckboxComponent) => ({
      template: `
    <fluent-checkbox id="checkbox-18" name="checkbox" slot="input" [checked]=checked></fluent-checkbox>
   `,
      props: args,
    }),
    args: {
        checked: false,
    },
  };
  export const Disabled: Story = {
    render: (args: CheckboxComponent) => ({
      template: `
    <fluent-checkbox id="checkbox-18" name="checkbox" slot="input" [disabled]="true"></fluent-checkbox>
   `,
      props: args,
    }),
    args: {
        disabled: true,
        message:'this is disabled'
        
    },
  };


  