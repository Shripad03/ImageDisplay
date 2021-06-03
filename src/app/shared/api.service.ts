import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  Key = "fdf429cca1201279179e94e631ceaf652780d35275fec51707aaeca1a23e0f0f";
  albumId = 1;
  per_page = 50;
  getImage() {
    return this.httpClient.get(
      // `https://api.unsplash.com/photos/?page=${this.albumId}&per_page=${this.per_page}&client_id=${this.Key}`

      `https://jsonplaceholder.typicode.com/albums/${this.albumId}/photos?_limit=${this.per_page}`
    );
  }
}
