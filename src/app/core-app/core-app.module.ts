import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreAppRoutingModule } from './core-app-routing.module';
import { CoreAppComponent } from './core-app.component';


@NgModule({
  declarations: [CoreAppComponent],
  imports: [
    CommonModule,
    CoreAppRoutingModule
  ]
})
export class CoreAppModule { }
