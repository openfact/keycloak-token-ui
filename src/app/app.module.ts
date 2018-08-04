import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Keycloak
import { KeycloakService } from './keycloak-service/keycloak.service';
import { KEYCLOAK_HTTP_INTERCEPTOR } from './keycloak-service/keycloak.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    KeycloakService,
    KEYCLOAK_HTTP_INTERCEPTOR
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
