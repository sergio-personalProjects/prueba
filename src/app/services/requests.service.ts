import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterfazTarea5 } from '../models/response.interface';
import { InterfazMemeAPI } from '../models/responseMemeAPI.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(public http: HttpClient) { }
  
  public getResponse(url:string): Observable<InterfazTarea5>{
    return this.http.get<InterfazTarea5>(url);
  }

  public getResponseMemeApi(url:string): Observable<InterfazMemeAPI>{
    return this.http.get<InterfazMemeAPI>(url);
  }


}
