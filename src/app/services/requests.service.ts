import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residents, Rickmorty } from '../models/response.interface';
import { EffectEntry, Pokemon, Welcome } from '../models/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(public http:HttpClient) { };
  //public urlApi:string='https://rickandmortyapi.com/api/location?page=1'


  public getResponseRickMorty(url:string): Observable<Rickmorty> {
    return this.http.get<Rickmorty>(url);
  }

  public getResponseResidents(url:string): Observable<Residents> {
    return this.http.get<Residents>(url);
  }

  public getpokemon(url:string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  };


  public getpokemonAbilities(url:string): Observable<Welcome> {
    return this.http.get<Welcome>(url);
  };


}
