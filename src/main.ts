import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import routeConfig from './app/routes';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    provideRouter(routeConfig),
    ...(appConfig.providers || [])
  ]
}).catch((err) => console.error(err));