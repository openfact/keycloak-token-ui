import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Keycloak
import { KeycloakService } from './keycloak-service/keycloak.service';
import { KEYCLOAK_HTTP_INTERCEPTOR } from './keycloak-service/keycloak.interceptor';

// Custom modules
import { AboutModalModule } from './layout/about-modal/about-modal.module';
import { TokenManagerModule } from './token-manager/token-manager.module';

// Footer & Header
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';

// Bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,

    // Footer & Header
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Custom modules
    AboutModalModule,
    TokenManagerModule,

    // Bootstrap
    BsDropdownModule.forRoot(),
  ],
  providers: [
    KeycloakService,
    KEYCLOAK_HTTP_INTERCEPTOR
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
