import { Injectable } from '@angular/core';
import { userRegister } from '../models/authModels/authModels'
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }



  onRegister(User : userRegister) : Observable<any> {
    alert("Service Called : " + JSON.stringify(  User));

   return  this.http.post("frtertr" , User).pipe(
      // tap(response => {
      //   localStorage.setItem('token', response.toString());
        
      // })
    );
  }




}
