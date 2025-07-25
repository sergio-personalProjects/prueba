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


  /**Ahora enviamos la información al PADRE indicando la imagen en la que ha hecho click el usuario */
  @Output() urlPhoto = new EventEmitter<string>();
  @Output() titlePhoto = new EventEmitter<string>();

  public onClick1(urlPhoto:string):void{
    this.urlPhoto.emit(urlPhoto);
  }

  public onClick2(title:string):void{
    this.titlePhoto.emit(title);
  }
}
