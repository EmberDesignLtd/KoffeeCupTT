import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export enum Endpoint {
  IMAGES = 'https://jsonplaceholder.typicode.com/albums/1/photos?_limit=',
}

export interface JsonPlaceholderImage {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({ providedIn: 'root' })
export class JsonPlaceholderService {
  constructor(private readonly http: HttpClient) {}

  getImages(imageCount = 10): Observable<JsonPlaceholderImage[]> {
    return this.http.get<JsonPlaceholderImage[]>(
      `${Endpoint.IMAGES}${imageCount}`
    );
  }
}
