import { environment } from './../../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icomment } from 'src/app/InterfaceAPI/Icomment/icomment';

@Injectable({
  providedIn: 'root'
})
export class ServiceCommentService {

  constructor(private http:HttpClient) { }

  getCommemt():Observable<Icomment[]>{
    return this.http.get<Icomment[]>(`${environment.ApiUrl}/comments/Getcomments`)
  };

  insertComment(comment:Icomment):Observable<Icomment>{
    const httpOptions ={headers:new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })};
      return this.http.post<Icomment>(`${environment.ApiUrl}/comments`,comment,httpOptions);

  }

}
