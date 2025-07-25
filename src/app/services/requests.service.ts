import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubAPI } from '../models/response.interface';
import { Episode, RickAPI } from '../models/rickMorty.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(public http: HttpClient) { }

  public getAngularAPI(url:string):Observable<GithubAPI>{
    return this.http.get<GithubAPI>(url);
  }


  public getRickMortyAPI(url:string):Observable<RickAPI>{
    return this.http.get<RickAPI>(url);
  }

  public getRickMortyEpisodes(url:string):Observable<Episode>{
    return this.http.get<Episode>(url);
  }
}
