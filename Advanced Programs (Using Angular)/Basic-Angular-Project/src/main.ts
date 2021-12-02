import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/* This is the first that will be run on the application*/
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
