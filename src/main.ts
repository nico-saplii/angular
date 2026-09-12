import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppRaiz } from './app/app';

bootstrapApplication(AppRaiz, appConfig)
  .catch((err) => console.error(err));