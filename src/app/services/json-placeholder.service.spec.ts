import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Endpoint, JsonPlaceholderService } from './json-placeholder.service';

const MOCK_DATA = [
  {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    albumId: 1,
    id: 2,
    title: 'reprehenderit est deserunt velit ipsam',
    url: 'https://via.placeholder.com/600/771796',
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
  },
];

describe('JsonPlaceholderService', () => {
  let service: JsonPlaceholderService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(JsonPlaceholderService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  describe('getImages should', () => {
    it('return an array of JsonPlaceholderImages', () => {
      service.getImages().subscribe((images) => {
        expect(images).toEqual(MOCK_DATA);
      });

      const req = httpMock.expectOne(`${Endpoint.IMAGES}10`);
      expect(req.request.method).toEqual('GET');
      req.flush(MOCK_DATA);

      httpMock.verify();
    });
  });
});
