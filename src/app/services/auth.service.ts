import { Injectable } from '@angular/core';
import { userRegister } from '../models/authModels/authModels';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  Registeruser(userRegister: FormData): Observable<userRegister> {

    console.log(`${this.apiUrl}/Register`);
    
    return this.http.post<userRegister>(
      `${this.apiUrl}/Auth/Register`,
      userRegister,
    );
  }
}
