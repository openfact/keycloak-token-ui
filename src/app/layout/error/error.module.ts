import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorComponent } from './error.component';
import { ErrorRoutingModule } from './error-routing.module';
import { ErrorService } from './error.service';

@NgModule({
  imports: [CommonModule, ErrorRoutingModule],
  declarations: [ErrorComponent],
  providers: [ErrorService]
})
export class ErrorModule { }
