import { ProviderSummary } from './app/pages/provider-summary/provider-summary';
import { createCustomElement } from '@angular/elements';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

bootstrapApplication(ProviderSummary, appConfig).then(appRef => {
  const element = createCustomElement(ProviderSummary, { injector: appRef.injector });
  customElements.define('provider-summary', element);
});
