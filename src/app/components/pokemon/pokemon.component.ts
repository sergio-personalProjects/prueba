import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  @Input() imagePokemon:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fobKqzyKJ53smXQId9FjD4iK7UuvujF2ZA&s';
  @Input() namePokemon:string='NombrePokemon';
  @Input() idPokemon:number=0;
  @Input() status:string='';

  @Output() data = new EventEmitter<string>();
  
  
  public onDetail():void{
    alert('Pokemon seleccionado: ' + this.namePokemon +'\n' +'id:' +this.idPokemon);
    this.data.emit(this.namePokemon);

    
  }


}
