import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private http:HttpClient) { }

  upload(file:File){
    if(!file||!file.name)return null;
    let form=new FormData();
    form.append('Image',file,file.name);
    return this.http.post(`${environment.ApiUrl}/api/Upload`,form);
  }
}
