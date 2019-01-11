import { Injectable } from '@angular/core';
// If using a local keycloak.js, uncomment this import.  With keycloak.js fetched
// from the server, you get a compile-time warning on use of the Keycloak()
// method below.  I'm not sure how to fix this, but it's certainly cleaner
// to get keycloak.js from the server.
//
import * as Keycloak from './keycloak';

type KeycloakClient = Keycloak.KeycloakInstance;
type InitOptions = Keycloak.KeycloakInitOptions;

@Injectable()
export class KeycloakService {
  static keycloakAuth: KeycloakClient;

  /**
   * Configure and initialize the Keycloak adapter.
   *
   * @param configOptions Optionally, a path to keycloak.json, or an object containing
   *                      url, realm, and clientId.
   * @param adapterOptions Optional initiaization options.  See javascript adapter docs
   *                       for details.
   * @returns {Promise<T>}
   */

  static init(initOptions?: InitOptions): Promise<any> {

    // const hconfigOptions: string | {} = {
    //   realm: SSO_REALM,
    //   url: SSO_API_URL,
    //   clientId: SSO_CLIENT_ID
    // };   
    const configOptions: string | {} = {
      realm: window['KeycloakUIEnv']['ssoRealm'],
      url: window['KeycloakUIEnv']['ssoApiUrl'],
      clientId: window['KeycloakUIEnv']['ssoClientID']
    };

    KeycloakService.keycloakAuth = Keycloak(configOptions);

    return new Promise((resolve, reject) => {
      KeycloakService.keycloakAuth.init(initOptions)
        .success(() => {
          resolve();
        })
        .error((errorData: any) => {
          reject(errorData);
        });
    });
  }

  authenticated(): boolean {
    return KeycloakService.keycloakAuth.authenticated;
  }

  login(options?: any) {
    KeycloakService.keycloakAuth.login(options);
  }

  logout() {
    KeycloakService.keycloakAuth.logout();
  }

  account() {
    KeycloakService.keycloakAuth.accountManagement();
  }

  authServerUrl(): string {
    return KeycloakService.keycloakAuth.authServerUrl;
  }

  realm(): string {
    return KeycloakService.keycloakAuth.realm;
  }

  manageAccount(): void {
    KeycloakService.keycloakAuth.accountManagement();
  }

  getToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (KeycloakService.keycloakAuth.token) {
        KeycloakService.keycloakAuth
          .updateToken(5)
          .success(() => {
            resolve(<string>KeycloakService.keycloakAuth.token);
          })
          .error(() => {
            reject('Failed to refresh token');
          });
      } else {
        reject('Not loggen in');
      }
    });
  }
}
