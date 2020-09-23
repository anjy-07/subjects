import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature2RoutingModule } from './feature2-routing.module';
import { Feature2Component } from './feature2.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [Feature2Component],
  imports: [
    CommonModule,
    HttpClientModule,
    Feature2RoutingModule
  ]
})
export class Feature2Module { }
