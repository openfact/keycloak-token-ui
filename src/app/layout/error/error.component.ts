import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  message = '';
  subscription: Subscription;
  hideBanner: boolean;
  spaceLink: string;

  constructor(private errorService: ErrorService) {
    this.subscription = this.errorService.update$.subscribe(
      (message) => {
        this.message = message;
      }
    );
  }

  ngOnInit() {

  }
}
