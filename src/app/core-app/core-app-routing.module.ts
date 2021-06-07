import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreAppComponent } from './core-app.component';

const routes: Routes = [{ path: '', component: CoreAppComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreAppRoutingModule { }
