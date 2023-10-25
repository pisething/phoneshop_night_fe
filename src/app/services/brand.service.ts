import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  url ="http://localhost:8080/";
  constructor(private http: HttpClient) { }

  saveBrand(brand : any){
    /*
    let token = localStorage.getItem('token')!;
        const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });

    const requestOptions = { headers: headers };

    return this.http.post(this.url + "brands",brand, requestOptions);
    */
    return this.http.post(this.url + "brands",brand);
  }

  getBrandList(brandParam : HttpParams) : Observable<any>{
    return this.http.get<any[]>(this.url + "brands", {params: brandParam});
  }

}
