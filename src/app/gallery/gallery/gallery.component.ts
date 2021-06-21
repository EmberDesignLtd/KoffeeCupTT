import { ChangeDetectionStrategy, Component } from '@angular/core';
import { JsonPlaceholderService } from './../../services/json-placeholder.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
  readonly images$ = this.jsonPlaceholderService.getImages();

  constructor(
    private readonly jsonPlaceholderService: JsonPlaceholderService
  ) {}
}
