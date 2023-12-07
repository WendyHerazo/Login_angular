import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://koy60.wiremockapi.cloud/login';

  constructor(private http: HttpClient) { }

  login (email: string, password: string){
    return this.http.post <any>(this.apiUrl,{user:email,password});

  }
}
