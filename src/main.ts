import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { KeycloakService } from './app/keycloak-service/keycloak.service';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));

KeycloakService.init({ onLoad: 'login-required', }).then(() => {
  platformBrowserDynamic().bootstrapModule(AppModule);
}).catch((err: any) => {
  console.log('Error in bootstrap: ' + JSON.stringify(err));
});
