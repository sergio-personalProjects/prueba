import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent {
  @Input() rear:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fobKqzyKJ53smXQId9FjD4iK7UuvujF2ZA&s';
  @Input() front:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fobKqzyKJ53smXQId9FjD4iK7UuvujF2ZA&s';
  @Input() rearShiny:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fobKqzyKJ53smXQId9FjD4iK7UuvujF2ZA&s';
  @Input() frontShiny:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fobKqzyKJ53smXQId9FjD4iK7UuvujF2ZA&s';
  
  public maxDetail:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fobKqzyKJ53smXQId9FjD4iK7UuvujF2ZA&s'
  public statusPhotos:string='';
  public statusPhotosDetail:string='none';
  @Output() dataStatusCard = new EventEmitter<string>();

  /**PARA RECIBIR LA INFORMACIÓN DEL TEXTO */
  @Input() textContentCharmander:string='';
  @Input() textContentBulbasaur:string='';
  @Input() textContentPikachu:string='';
  @Input() namePokemonSelected:string='';
  public textContent:string='';
  
  public onClick(num:number):void{
    this.statusPhotosDetail='';
    this.statusPhotos='none';
    this.dataStatusCard.emit('none');
    if(num ===1){
      this.maxDetail=this.rear;

    }else{
      if(num===2){
        this.maxDetail=this.front;
        
      }else{
        if(num===3){
          this.maxDetail=this.rearShiny;

        }else{
          if(num===4){
            this.maxDetail=this.frontShiny;
          }
        }
      }
    }
  };

  public onClickDetail():void{
    this.statusPhotosDetail='none';
    this.statusPhotos='';
    this.dataStatusCard.emit('');
    }
  };




