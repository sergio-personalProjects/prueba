import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from '../models/response.interface';
import { Pokemon } from '../models/pokemon.interface';
import { DragonBall, OriginPlanet, Transformation } from '../models/dragonball.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(public http:HttpClient) { }

  public getResponse(url:string): Observable<Cat[]>{
    return this.http.get<Cat[]>(url);
  }

  public getPokemon(url:string): Observable<Pokemon>{
    return this.http.get<Pokemon>(url);
  }

  /**PARA EJEMPLO DE OTRO SERVICIO 
   * 
   *   public add(numA:number, numB:number):number{
    return numA + numB;
  }
  */

  /**PRUEBA DRAGON BALL */
/*OPCION UNIFICADA GENERADA POR IA* 
public getDragonBallData(url: string): Observable<DragonBall | OriginPlanet | Transformation> {
    return this.http.get<DragonBall | OriginPlanet | Transformation>(url);
  }*/
  

  public getDragonBall(url:string): Observable<DragonBall>{
    return this.http.get<DragonBall>(url); 
  }

  public getDragonBallPlanet(url:string): Observable<OriginPlanet>{
    return this.http.get<OriginPlanet>(url);
  }

  public getDragonBallTransformation(url:string): Observable<Transformation>{
    return this.http.get<Transformation>(url);
  }

}
