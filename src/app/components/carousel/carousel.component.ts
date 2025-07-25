import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input() nameCarousel:string='nameCarousel';
  @Input() imageCarousel:string='https://media.istockphoto.com/id/1172427455/es/foto/hermosa-puesta-de-sol-sobre-el-mar-tropical.jpg?s=612x612&w=0&k=20&c=q48rq3n3xFFwv0ihyYG8j-3MmrKwTWhGhT8isczbzh8=';
  @Input() currentCharacter:number=0;
  @Input() arrayContents:{name:string, image:string}[]=[];
  @Output() character = new EventEmitter<number>();
  @Input() currentPageEjercicio2:number=0;
  @Output() currentPageCarousel = new EventEmitter<number>();
  @Output() displayEpisode = new EventEmitter<string>();


  public customCharacter(numberCharacter:number):void{
    if(numberCharacter===1){
      if(this.currentCharacter!=this.arrayContents.length){
        this.currentCharacter++;
      }else{
        this.currentCharacter=0;
      }
      this.character.emit(this.currentCharacter);
    }else{
      if(this.currentCharacter!=0){
        this.currentCharacter--;
      }else{
        this.currentCharacter=this.arrayContents.length;
      }
      this.character.emit(this.currentCharacter);
    }
  }

  public customPage(numberPage:number):void{
    if(numberPage===1){
      if(this.currentPageEjercicio2!=0){
        this.currentPageEjercicio2++;
      }
      this.currentPageCarousel.emit(this.currentPageEjercicio2);
    }else{
      if(this.currentPageEjercicio2===1){
        this.currentPageEjercicio2=1;
      }else{
        this.currentPageEjercicio2--;
      }
      this.currentPageCarousel.emit(this.currentPageEjercicio2);
    }
  }

  @Output() modal = new EventEmitter<boolean>();

  public onDetail(i:number):void{
    alert(this.arrayContents[i].name + '\n'  +  this.imageCarousel );//De control
    this.displayEpisode.emit('');
    this.modal.emit(false);
  }
}
