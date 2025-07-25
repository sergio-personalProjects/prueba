import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  
  
  @Input() title: string='';
  @Input() text: string='';
  @Input() photo: string='';

  @Output() urlPost = new EventEmitter<string>();
  @Output() titlePost = new EventEmitter<string>();
  @Output() textPost = new EventEmitter<string>();

  public onClickPost1(urlPhoto:string){
    this.urlPost.emit(urlPhoto);
  }

  public onClickPost2(titlePhoto:string){
    this.titlePost.emit(titlePhoto);
  }

  public onClickPost3(textPhoto:string ){
    this.textPost.emit(textPhoto);
  }

}
