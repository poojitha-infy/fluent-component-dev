// Importing modules for theme
import { switchTheme } from '../public/theme-switch';
import webcomponentsTheme from './theme';

// import '../src/index-rollup.js';
import './docs-root.css';

import type { Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";

// import {
//   baseLayerLuminance,
//   StandardLuminance,
//   provideFluentDesignSystem,
//   fluentButton,
//   fluentTextField,
//   fluentCheckbox,
//   fluentRadio,
//   fluentRadioGroup,
//   fluentSwitch,
//   fluentCombobox,
//   fluentOption,
//   fluentTab,
//   fluentTabPanel,
//   fluentTabs,
//   fluentAnchor
// } from '@fluentui/web-components';


import docJson from "../documentation.json";
setCompodocJson(docJson);
// provideFluentDesignSystem().register(fluentButton(), fluentTextField());
// provideFluentDesignSystem()
//     .register(
//         fluentCheckbox(),
//         fluentRadio(),
//         fluentRadioGroup(),
//         fluentSwitch(),
//         fluentCombobox(),
//         fluentOption(),
//         fluentTab(),
//         fluentTabPanel(),
//         fluentTabs(),
//         fluentAnchor()
//     );

    // Define the allowed theme values
type Theme = 'web-light' | 'web-dark' | 'teams-light' | 'teams-dark';

// Type guard to check if a value is a valid theme
function isTheme(value: string): value is Theme {
  return ['web-light', 'web-dark', 'teams-light', 'teams-dark'].includes(value);
}
// Type for the event parameter
function changeTheme(e: Event) {
  const target = e.target as HTMLInputElement;
  const value = target.value;
  if (isTheme(value)) {
    switchTheme(value);
  } else {
    console.error(`Invalid theme value: ${value}`);
  }
}
// Adding an event listener
document.getElementById('theme-switch')?.addEventListener('change', changeTheme, false);

// Setting the initial theme
// switchTheme('web-light');
switchTheme('delish-theme');


const preview: Preview = {
  parameters: {
   
     a11y: {
      // Optional selector to inspect
      element: '#storybook-root',
      config: {
        rules: [
          {
            // The autocomplete rule will not run based on the CSS selector provided
            id: 'autocomplete-valid',
            selector: '*:not([autocomplete="nope"])',
          },
          {
            // Setting the enabled option to false will disable checks for this particular rule on all stories.
            id: 'image-alt',
            enabled: false,
          },
        ],
      },
      // Axe's options parameter
      options: {},
      // Optional flag to prevent the automatic check
      manual: true,
    },
  },
};

export default preview;
// Exporting parameters with TypeScript type inference
export const parameters = {
  layout: 'fullscreen' as const,
  controls: { expanded: true },
  viewMode: 'docs' as const,
  previewTabs: {
    canvas: { hidden: true },
  },
  options: {
    storySort: {
      method: 'alphabetical' as const,
      order: ['Concepts', ['Introduction', 'Developer', ['Quick Start']], 'Components', 'Theme'],
    },
  },
  docs: {
    theme: webcomponentsTheme, // Override the default Storybook theme with a custom fluent theme
  },
};