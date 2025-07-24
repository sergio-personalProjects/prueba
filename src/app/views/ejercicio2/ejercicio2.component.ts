import { Component } from '@angular/core';
import { PokemonComponent } from "../../components/pokemon/pokemon.component";
import { PhotoComponent } from "../../components/photo/photo.component";
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [PokemonComponent, PhotoComponent],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {

  public constructor(public service: RequestsService) { };
  
  public namePokemon:string='';
  public imagePokemon:string='';
  public pokemonSearch:{name:string}[]=[{name:'charmander'}, {name:'bulbasaur'}, {name:'pikachu'}];
  public urlPokemon1:string='https://pokeapi.co/api/v2/pokemon/'; //+ this.pokemonSearch[0].name//;
  public arrayPokemons:{name:string, image:string}[]=[];
  public arrayPokemonsDetails:{rear:string, front:string, rearShiny:string, frontShiny:string}[]=[];
  public namePokemonSelected:string='';
  public statusCard:string='';
  
  


  public  getArrayPushPokemon():void{
    for(let i=0; i<this.pokemonSearch.length; i++){
      this.urlPokemon1='https://pokeapi.co/api/v2/pokemon/' + this.pokemonSearch[i].name;
      this.service.getpokemon(this.urlPokemon1).subscribe(response => {
        //this.namePokemon=response.name;//DE CONTROL
        //this.imagePokemon=response.sprites.front_default;//DE CONTROL

        //CREACIÓN DE ARRAY CON LAS 4 IMAGENES
        this.arrayPokemons.push({
          name:response.name, 
          image:response.sprites.front_default
        });
        console.log(this.arrayPokemons[i].name);
        console.log(this.arrayPokemons[i].image);
        
        //CREACIÓN DE ARRAY CON LAS 4 IMAGENES
        this.arrayPokemonsDetails.push({
          rear:response.sprites.back_default, 
          front:response.sprites.front_default, 
          rearShiny:response.sprites.back_shiny, 
          frontShiny:response.sprites.front_shiny,
        });
      });
    };
  };


  
  
  public currentPokemon:number=0;
  public namePokemonSelectedComponent(name:string):void{
    if(name ==='charmander'){
      this.currentPokemon=0;
      this.namePokemonSelected='charmander';
    }else{
      if(name ==='bulbasaur'){
        this.currentPokemon=1;
        this.namePokemonSelected='bulbasaur';
      }else{
        if(name ==='pikachu'){
          this.currentPokemon=2;
          this.namePokemonSelected='pikachu';
        };
      }
    }
  };



  public statusCardsPokemon(status:string):void{
    this.statusCard=status;
  };

/**SACAR LA HABILIDAD
 * Inicialmente pensaba meter el texto en el array de las 4 sprites... pero no sé hacerlo... entonces
 * estoy haciendo esto de forma muy rudimentaria.... pero no tiene sentido...
 * 
 * PREGUNTAR AL PROFESOR
 */
  public habilidadCharmander:string='';
  public habilidadBulbasaur:string='';
  public habilidadPikachu:string='';
  public urlAbilitiesCharmander='https://pokeapi.co/api/v2/ability/66/'
  public urlAbilitiesBulbasur='https://pokeapi.co/api/v2/ability/65/'
  public urlAbilitiesPikachu='https://pokeapi.co/api/v2/ability/9/'

 public getAbility():void{
    this.service.getpokemonAbilities(this.urlAbilitiesCharmander).subscribe(response => {
      this.habilidadCharmander=response.effect_entries[0].effect;
    });
    this.service.getpokemonAbilities(this.urlAbilitiesBulbasur).subscribe(response => {
      this.habilidadBulbasaur=response.effect_entries[0].effect;
    });
    this.service.getpokemonAbilities(this.urlAbilitiesPikachu).subscribe(response => {
      this.habilidadPikachu=response.effect_entries[0].effect;
    });
  };




  public ngOnInit():void{
    //this.getResponseCharmander();
    this.getArrayPushPokemon();
    //alert(this.urlPokemon1); //DE CONTROL
    //alert(this.pokemonSearch[0].name)//DE CONTROL
    //alert(this.pokemonSearch[1].name)//DE CONTROL
    //alert(this.pokemonSearch[2].name)//DE CONTROL
    this.getAbility();
  };


}
