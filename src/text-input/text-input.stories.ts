import { Meta, StoryObj } from '@storybook/angular';
import { TextInputComponent } from './text-input.component';
import { TextInputAppearance, TextInputControlSize, TextInputType } from './text-input.options';

// Define the meta configuration
const meta: Meta<TextInputComponent> = {
  title: 'Fluent/TextInput',
  component: TextInputComponent,
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      description: 'Sets the visual appearance of the control',
      control: 'select',
      options: Object.values(TextInputAppearance),
    },
    autocomplete: { control: 'text' },
    autofocus: { control: 'boolean' },
    controlSize: {
      description: 'Sets the size of the control',
      control: 'select',
      options: Object.values(TextInputControlSize),
    },
    dirname: { control: 'text' },
    disabled: { control: 'boolean' },
    form: { control: 'text' },
    list: { control: 'text' },
    maxlength: { control: 'number' },
    minlength: { control: 'number' },
    multiple: { control: 'boolean' },
    name: { control: 'text' },
    pattern: { control: 'text' },
    placeholder: { control: 'text' },
    readOnly: { control: 'boolean' },
    required: { control: 'boolean' },
    size: { control: 'text' },
    spellcheck: { control: 'boolean' },
    type: {
      control: 'select',
      options:Object.values(TextInputType),
    },
    value: { control: 'text' },
    label: { control: 'text' },
  },
};

export default meta;
const Template: StoryObj<TextInputComponent> = {
  render:(args: TextInputComponent) => ({
    props: args,
    template: `
    <fluent-text-input
      [appearance]="appearance"
      [autocomplete]="autocomplete"
      [autofocus]="autofocus"
      [controlSize]="controlSize"
      [dirname]="dirname"
      [disabled]="disabled"
      [form]="form"
      [list]="list"
      [maxlength]="maxlength"
      [minlength]="minlength"
      [multiple]="multiple"
      [name]="name"
      [pattern]="pattern"
      [placeholder]="placeholder"
      [readOnly]="readOnly"
      [required]="required"
      [size]="size"
      [spellcheck]="spellcheck"
      [type]="type"
      [value]="value"
    >
      <ng-content select="[slot='start']"></ng-content>
      <ng-content select="[slot='end']"></ng-content>
      <fluent-label>{{ label }}</fluent-label>
    </fluent-text-input>
    `
  })
}

// Define the stories using StoryObj
export const Default: StoryObj<TextInputComponent> = {
  ...Template,
  args: {
    appearance: 'outline',
    controlSize: 'medium',
    placeholder: 'Enter text...',
    label: 'Sample Input',
  }
};

// export const WithIconStart: StoryObj<TextInputComponent> = {
//   render: (args: TextInputComponent) => ({
//     component: TextInputComponent,
//     props: args,
//   }),
//   args: {
//     appearance: 'outline',
//     controlSize: 'medium',
//     placeholder: 'Enter text...',
//     label: 'Content Start',
//     // Additional customization for start slot if needed
//   },
// };

// export const WithIconEnd: StoryObj<TextInputComponent> = {
//   render: (args: TextInputComponent) => ({
//     component: TextInputComponent,
//     props: args,
//   }),
//   args: {
//     appearance: 'outline',
//     controlSize: 'medium',
//     placeholder: 'Enter text...',
//     label: 'Content After',
//     // Additional customization for end slot if needed
//   },
// };

// export const Placeholder: StoryObj<TextInputComponent> = {
//   render: (args: TextInputComponent) => ({
//     component: TextInputComponent,
//     props: args,
//   }),
//   args: {
//     appearance: 'outline',
//     placeholder: 'This is a placeholder',
//     label: 'Input with a placeholder',
//   },
// };

// export const Size: StoryObj<TextInputComponent> = {
//   render: (args: TextInputComponent) => ({
//     component: TextInputComponent,
//     props: args,
//   }),
//   args: {
//     appearance: 'outline',
//     controlSize: 'small',
//     placeholder: 'Small Input',
//     label: 'Small Input',
//   },
// };

// export const Inline: StoryObj<TextInputComponent> = {
//   render: (args: TextInputComponent) => ({
//     component: TextInputComponent,
//     props: args,
//   }),
//   args: {
//     appearance: 'outline',
//     placeholder: 'inline text input',
//     label: 'Inline Input',
//   },
// };

// export const Disabled: StoryObj<TextInputComponent> = {
//   render: (args: TextInputComponent) => ({
//     component: TextInputComponent,
//     props: args,
//   }),
//   args: {
//     appearance: 'outline',
//     disabled: true,
//     placeholder: 'Disabled Input',
//     label: 'Disabled Input',
//   },
// };

// export const Required: StoryObj<TextInputComponent> = {
//   render: (args: TextInputComponent) => ({
//     component: TextInputComponent,
//     props: args,
//   }),
//   args: {
//     appearance: 'outline',
//     required: true,
//     placeholder: 'Required Input',
//     label: 'Required Input',
//   },
// };

// export const ReadOnly: StoryObj<TextInputComponent> = {
//   render: (args: TextInputComponent) => ({
//     component: TextInputComponent,
//     props: args,
//   }),
//   args: {
//     appearance: 'outline',
//     readOnly: true,
//     placeholder: 'Readonly Input',
//     label: 'Readonly Input',
//   },
// };
