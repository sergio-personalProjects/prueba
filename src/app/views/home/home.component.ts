import { Component } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { customArrayDragonBall, OriginPlanet, Transformation } from '../../models/dragonball.interface';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public resp: string = '';
  public constructor(public service: RequestsService) { }
  //public url:string='https://api.thecatapi.com/v1/images/search?size=full';

  public front: string = '';
  public back: string = '';


  /**Utilización API DRAGONBALL */
  public apiUrl: string = '';
  public name: string = 'Nombre';
  public image: string = 'https://dragonball-api.com/characters/Freezer.webp';
  public planetImage: string = '';
  public buttonTransform: string = 'Botón Transformación';
  public nameTransform: string = 'nombre Transformación';
  public transformImage: string = '';
  public status: boolean = true;

  public contents: customArrayDragonBall[] = [];



  public getResponse2(): void {
    for (let personaje = 1; personaje <= 300; personaje++) {
      this.apiUrl = 'https://dragonball-api.com/api/characters/' + personaje;// Para en el for siguiente sacar  primeros 20 los personajes
      this.service.getDragonBall(this.apiUrl).subscribe(response => {
        console.log(response.name);//De control
        this.contents.push({
          name: response.name,
          image: response.image,
          planetImage: response.originPlanet.image,
        })
      })
    }
  }

  public onClick(): void {
    this.status = !this.status;
    console.log(this.contents[0].name);
  }

  public ngOnInit(): void {
    this.getResponse2();
  }
}
