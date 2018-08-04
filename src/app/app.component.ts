import { KeycloakService } from './keycloak-service/keycloak.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'keycloak-token-ui';

  token: string;
  tokenType: string;

  constructor(private keycloakService: KeycloakService) {
    this.imprimir();
  }

  test() {
    this.keycloakService.login({ scope: 'offline_access' });
  }

  logout() {
    this.keycloakService.logout();
  }

  imprimir() {
    this.token = KeycloakService.keycloakAuth.refreshToken;
    this.tokenType = KeycloakService.keycloakAuth.refreshTokenParsed['typ'];
  }
}
