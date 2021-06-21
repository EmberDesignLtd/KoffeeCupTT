import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LazyLoadImagesDirective } from './lazy-load-images.directive';

@NgModule({
  declarations: [LazyLoadImagesDirective],
  imports: [CommonModule],
  exports: [LazyLoadImagesDirective],
})
export class LazyLoadImagesModule {}
