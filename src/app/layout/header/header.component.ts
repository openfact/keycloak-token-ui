import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

import { KeycloakService } from './../../keycloak-service/keycloak.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private subcriptions: Subscription[] = [];

  constructor(private keycloakService: KeycloakService) {

  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subcriptions.forEach((val) => val.unsubscribe());
  }

  logout() {
    this.keycloakService.logout();
  }

}
