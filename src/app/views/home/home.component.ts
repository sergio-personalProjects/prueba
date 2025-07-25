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
    public resp: string='';
    public constructor(public service:RequestsService) { }

    public front: string='';
    public back: string='';

    /**Utilización API DRAGONBALL */
    public apiUrl: string='';
    public name: string='Nombre';
    public image: string='https://dragonball-api.com/characters/Freezer.webp';
    public planetImage: string='';
    public buttonTransform: string='Botón Transformación';
    public nameTransform: string='nombre Transformación';
    public transformImage: string='';
    public status: boolean=true;

    //Array creado para poder guardar y trabajar con los personajes
    public contents: customArrayDragonBall[]=[
    ];
    
  public getResponse2(): void {
    for (let personaje = 1; personaje <= 20; personaje++) {
      this.apiUrl = 'https://dragonball-api.com/api/characters/' + personaje;// Para en el for siguiente sacar todos los personajes
      this.service.getDragonBall(this.apiUrl).subscribe(response => {
        console.log(response.name);//De control
        this.name = response.name;
        this.image = response.image;
        this.planetImage = response.originPlanet.image;
        this.nameTransform=response.transformations[3].name;
        this.transformImage = response.transformations[3].image;

        /**VERSIÓN GUARDANDO INFORMACIÓN EN EL ARRAY contents */
        this.contents.push({
          name: response.name,
          image: response.image,
          planetImage: response.originPlanet.image,
          nameTransform: response.transformations[3].name,
          transformImage: response.transformations[3].image
        })
      })
    }
  }

  public onClick(): void {
   console.log(this.nameTransform)//De control
    this.status = !this.status;
    console.log(this.contents[0].name);
  }

  public ngOnInit(): void {
    this.getResponse2();
  }
}
