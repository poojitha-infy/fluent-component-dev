import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
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


provideFluentDesignSystem().register(fluentButton(), fluentTextField());
provideFluentDesignSystem()
    .register(
        fluentAccordion(),
        fluentAccordionItem(),
        fluentDataGridCell(),
        fluentDataGridRow(),
        fluentDataGrid()
    );
 

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  const element = document.getElementById('dark');
  if(element) {
    baseLayerLuminance.setValueFor(
      element,
      StandardLuminance.DarkMode
    );
  }
