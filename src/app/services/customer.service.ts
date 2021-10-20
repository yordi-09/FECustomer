import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private myApiUrl = 'https://localhost:44363/api/fpt';

  constructor(private http: HttpClient) { }

  getListCustomer(): Observable<any> {
    return this.http.get(this.myApiUrl)
  }

  deleteCustomer(id: number) : Observable<any> {
    return this.http.delete(this.myApiUrl);
}
}
