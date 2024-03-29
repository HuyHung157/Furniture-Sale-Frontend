import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ListProductCarouselComponent } from './list-product-carousel/list-product-carousel.component';
import { BannerCarouselComponent } from './banner-carousel/banner-carousel.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { ImageCropperDialogComponent } from './image-cropper-dialog/image-cropper-dialog.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { LocalSpinnerComponent } from './local-spinner/local-spinner.component';
import { CustomPaginationComponent } from './custom-pagination/custom-pagination.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

const components: Type<any>[] = [
  BannerCarouselComponent,
  ListProductCarouselComponent,
  ProductItemComponent,
  ConfirmDialogComponent,
  ImageUploaderComponent,
  ImageCropperComponent,
  ImageCropperDialogComponent,
  LocalSpinnerComponent,
  CustomPaginationComponent
]

@NgModule({
  declarations: [ components ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    ImageCropperModule,
    FlexLayoutModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule
  ],
  exports: [ components ],
})
export class CommonComponentModule { }
