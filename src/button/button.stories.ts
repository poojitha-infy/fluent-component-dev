import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { ButtonAppearance } from '../other.options';

const meta: Meta<ButtonComponent> = {
  title: 'Fluent/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  args: {
    content: 'Button',
    disabled: false,
    disabledFocusable: false,
  },
  argTypes: {
    appearance: {
      control: { type: 'select', options: Object.values(ButtonAppearance) },
    },
    iconOnly: { control: 'boolean' },
    icon: { control: 'text' },
    content: { control: 'text' },
    disabled: {
      control: 'boolean',
      table: {
        type: {
          summary: 'Sets the disabled state of the component',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    disabledFocusable: {
      control: 'boolean',
      table: {
        type: {
          summary: 'The component is disabled but still focusable',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Accent: Story = {
  args: {
    appearance: 'accent',
    content: 'Primary',
  },
};
export const Outline: Story = {
  args: {
    appearance: 'outline',
    content: 'Outline',
  },
};

export const Lightweight: Story = {
  args: {
    appearance: 'lightweight',
    content: 'Lightweight',
  },
};

export const Neutral: Story = {
  args: {
    appearance: 'neutral',
    content: 'Neutral',
  },
};
export const Stealth: Story = {
  args: {
    appearance: 'stealth',
    content: 'Stealth',
  },
};

// Icon Example (used in size stories)

// Size Stories

export const ButtonWithIcon: Story = {
  args: {
    appearance: 'accent',
    iconOnly: true,
    icon: ` <svg
  fill="currentColor"
  slot="start"
  aria-hidden="true"
  width="1em"
  height="1em"
  viewBox="0 0 20 20"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zM7 11a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zM7 7a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z"
    fill="currentColor"
  ></path>
</svg>`,
    content: '',
    // content:' image icon'
    // content: `Small with calendar icon ${icon('start')}`,
  },
};

export const ButtonWithIconAndText: Story = {
  args: {
    appearance: 'accent',
    icon: 'CalendarMonthRegular',
    content: ' image icon',
    // content: `Small with calendar icon ${icon('start')}`,
  },
};

// Long Text Example
export const WithLongText: Story = {
  args: {
    content: 'Long text wraps after it hits the max width of the component',
  },
};
