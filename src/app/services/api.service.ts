import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from  '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

    apiUrl : string = environment.apiUrl;
   params = new HttpParams();

  constructor(private http : HttpClient,private route : Router) {   }


get<T>(path : string , params : any  ) : Observable<any>{
    return this.http.get<T>( `${this.apiUrl} /${path}` , params);
}

post<T>( path : string , body : any ) : Observable<T>{
  return this.post<T>(`${this.apiUrl} /${path}` , body);
}

put<T>(path : string , body : any) : Observable<T>{
  return this.put<T>(`${this.apiUrl} /${path}` , body );
}


delete<T>(path : string , body : any) : Observable<T>{
  return this.delete<T>(`${this.apiUrl} /${path}` , body);
}











}
