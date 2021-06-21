import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    GalleryComponent,
    ImageComponent
  ],
  imports: [CommonModule, GalleryRoutingModule],
})
export class GalleryModule {}
