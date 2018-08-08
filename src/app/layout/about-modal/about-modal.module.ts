import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule as BSModalModule } from 'ngx-bootstrap/modal';
import { AboutModalModule as ModalModule} from 'patternfly-ng/modal';

import { AboutModalComponent } from './about-modal.component';

@NgModule({
  imports: [
    CommonModule,
    BSModalModule.forRoot(),
    ModalModule
  ],
  declarations: [
    AboutModalComponent
  ],
  exports: [
    AboutModalComponent
  ]
})
export class AboutModalModule {
  constructor() { }
}
