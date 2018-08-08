import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenManagerRoutingModule } from './token-manager-routing.module';
import { GetTokenComponent } from './get-token/get-token.component';

import { BlockCopyModule } from 'patternfly-ng/copy';

@NgModule({
  imports: [
    CommonModule,
    TokenManagerRoutingModule,

    BlockCopyModule
  ],
  declarations: [GetTokenComponent]
})
export class TokenManagerModule { }
