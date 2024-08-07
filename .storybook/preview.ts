import type { Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import {
  baseLayerLuminance,
  StandardLuminance,
  provideFluentDesignSystem,
  fluentButton,
  fluentTextField,
  fluentAccordion,
  fluentAccordionItem,
  fluentDataGridCell,
  fluentDataGridRow,
  fluentDataGrid
} from '@fluentui/web-components';


import docJson from "../documentation.json";
setCompodocJson(docJson);
provideFluentDesignSystem().register(fluentButton(), fluentTextField());
provideFluentDesignSystem()
    .register(
        fluentAccordion(),
        fluentAccordionItem(),
        fluentDataGridCell(),
        fluentDataGridRow(),
        fluentDataGrid()
    );

const element = document.getElementById('dark');
    if(element) {
      baseLayerLuminance.setValueFor(
        element,
        StandardLuminance.DarkMode
      );
    }
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
