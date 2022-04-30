import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Coffee } from '../models/coffee.model';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private consumeApi = (url : string) => this.http.get(url + '', {}).pipe(
      map((data) => <Coffee[]>data)
    );

  getCoffeeData() {
    return this.consumeApi(environment.baseURL);
  }
}
