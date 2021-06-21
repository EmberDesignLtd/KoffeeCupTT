import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [CommonModule, GalleryRoutingModule],
})
export class GalleryModule {}
