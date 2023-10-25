import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url ="http://localhost:8080/";
  constructor(private http: HttpClient) { }

  saveUser(user : any){
    return this.http.post(this.url + "api/auth/signup",user);
  }

  login(loginData: any) : Observable<any>{
    return this.http.post(this.url + "api/auth/signin",loginData, {observe: 'response'});
  }

}
