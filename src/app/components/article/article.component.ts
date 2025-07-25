import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @Input() title: string='';
  @Input() text: string='';
  @Input() photo: string='';
 

  /**DE CONTROL
   *  @Input() urlPhoto: string='';
   * 
   * public onClick(photo:string):void{
    alert(photo); //Unicamente para control

  }

  public onClick(urlPhoto:string):void{
    alert(urlPhoto); //Unicamente para control

  }
   */
  



    /**Ahora enviamos la información al PADRE indicando la imagen en la que ha hecho click el usuario */
  @Output() urlPhoto = new EventEmitter<string>();
  @Output() titlePhoto = new EventEmitter<string>();
  //@Output() statusModalClick = new EventEmitter<boolean>();//Veo que no es necesario enviarselo al padre

  public onClick1(urlPhoto:string):void{
    //alert(urlPhoto); //Unicamente para control
    this.urlPhoto.emit(urlPhoto);
    //this.statusModalClick.emit(false);//Veo que no es necesario enviarselo al padre
  }

  public onClick2(title:string):void{
    //alert(urlPhoto); //Unicamente para control
    this.titlePhoto.emit(title);
  }




}
