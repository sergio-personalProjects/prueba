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
    //public url:string='https://api.thecatapi.com/v1/images/search?size=full';

    public front: string='';
    public back: string='';

    public getResponse(): void{
      this.service.getPokemon('https://pokeapi.co/api/v2/pokemon/ditto').subscribe(response=>{
        console.log(response.sprites.front_default);
        console.log(response.sprites.back_default);
        this.front=response.sprites.front_default;
        this.back=response.sprites.back_default;
        //console.log(response[0].url);
        //this.resp=response[0].id;
      })
    }


    /**EJEMPLO DE UTILZIACIÓN OTRO SERVICIO 
     *     public result: number=0;

    public getNumber():void{
      this.result=this.service.add(7, 1);
      alert(this.result);
    };
    */

    /**Utilización API DRAGONBALL */
    public apiUrl: string='';//Necesario crearla para poder jugar con el numero de personaje dentro de la función getResponse.
    public name: string='Nombre';
    public image: string='https://dragonball-api.com/characters/Freezer.webp';
    //public planet: string='Planeta';
    public planetImage: string='';
    public buttonTransform: string='Botón Transformación';
    public nameTransform: string='nombre Transformación';
    public transformImage: string='';
    public status: boolean=true;

    //Array creado para poder guardar y trabajar con los personajes
    public contents: customArrayDragonBall[]=[
      //{name: 'figura', image: 'imagen', planetImage: 'imagen planeta', nameTransform: 'Nombre transformación', transformImage:'Imagen transformación'},
    ];


    /**FUNCION ORIGINAL 
     * public getResponse2():void{
      this.service.getDragonBall('https://dragonball-api.com/api/characters/65').subscribe(response=>{
        console.log(response.name);//De control
        console.log(response.race);//De control
        console.log(response.originPlanet);//De control
        this.name=response.name;
        this.image=response.image;
        this.planet=response.originPlanet.name;
        this.planetImage=response.originPlanet.image;
        this.transform=response.transformations[3].name;
        this.transformImage=response.transformations[3].image;
      })
    }

    public ngOnInit():void{
      this.getResponse2(); 
    }
    */
    
  public getResponse2(): void {
    for (let personaje = 1; personaje <= 5; personaje++) {
      this.apiUrl = 'https://dragonball-api.com/api/characters/' + personaje;// Para en el for siguiente sacar todos los personajes
      this.service.getDragonBall(this.apiUrl).subscribe(response => {
        console.log(response.name);//De control
        //console.log(response.race);//De control
        //console.log(response.originPlanet);//De control
        this.name = response.name;
        this.image = response.image;
        this.planetImage = response.originPlanet.image;
        this.nameTransform=response.transformations[3].name;
        this.transformImage = response.transformations[3].image;
        //this.planet = response.originPlanet.name;

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
    //console.log(this.contents[0].name +'\n'+this.contents[0].image +'\n'+this.contents[0].planetImage +'\n'+this.contents[0].nameTransform +'\n'+this.contents[0].transformImage +'\n'); DE CONTROL
    console.log(this.contents[0].name);
  }

  public ngOnInit(): void {
    this.getResponse2();
  }




}
