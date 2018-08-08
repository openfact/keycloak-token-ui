import { Component, OnInit } from '@angular/core';
import { KeycloakService } from './../../keycloak-service/keycloak.service';
import { CopyEvent } from 'patternfly-ng/copy';

@Component({
  selector: 'app-get-token',
  templateUrl: './get-token.component.html',
  styleUrls: ['./get-token.component.scss']
})
export class GetTokenComponent implements OnInit {

  token = {
    buttonLabel: 'Copiar',
    buttonAriaLabel: 'Copiar',
    expandToggleAriaLabel: 'Token',
    label: 'Token',
    tooltip: 'Token',
    value: '',
  };

  constructor(private keycloakService: KeycloakService) {
  }

  ngOnInit() {
    const tokenType: string = KeycloakService.keycloakAuth.refreshTokenParsed['typ'];
    this.token.label = 'Token type:' + tokenType;
    if (tokenType.toLowerCase() === 'offline') {
      this.token.value = KeycloakService.keycloakAuth.refreshToken;
    }
  }

  loginAndGetOfflineToken() {
    this.keycloakService.login({ scope: 'offline_access' });
  }

}
