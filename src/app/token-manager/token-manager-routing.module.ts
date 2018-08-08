import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GetTokenComponent } from './get-token/get-token.component';

const routes: Routes = [
  {
    path: '',
    component: GetTokenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TokenManagerRoutingModule { }
