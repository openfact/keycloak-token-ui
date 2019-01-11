window.KeycloakUIEnv = {
  "ssoRealm": "{{ .Env.SSO_REALM }}",
  "ssoApiUrl": "{{ .Env.SSO_API_URL }}",
  "ssoClientID": "{{ .Env.SSO_CLIENT_ID }}"
 /* "ssoRealm": "innpath",
  "ssoApiUrl": "https://sso-sso.b9ad.pro-us-east-1.openshiftapps.com/auth",//"http://localhost:8080/auth",
  "ssoClientID": "openfact-web-console"*/
};
