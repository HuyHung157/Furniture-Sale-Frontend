
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentModule } from './common-component/common-component.module';
import { MaterialModule } from '../material/material.module';
import { DataService } from './services/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonComponentModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SlickCarouselModule,
  ],
  providers: [
    DataService,
  ],
  exports: [
    CommonComponentModule,
    MaterialModule,
  ]
})
export class SharedModule { }
