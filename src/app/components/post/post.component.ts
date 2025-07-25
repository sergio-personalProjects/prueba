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


  /**PARA MANEJAR CUANDO SE VE POST Y ARTICLE */


/**ESTO EN UNA SOLA FUNCIÓN NO ME FUNCIONA PERO EL ALERT, SI QUE SALE BIEN.
 * public onClickPost(urlPhoto:string, titlePhoto:string,textPhoto:string ){
    //alert(titlePost +'\n' +textPost +'\n' +urlPost)//DE CONTROL
    this.urlPost.emit(urlPhoto);
    this.titlePost.emit(titlePhoto);
    this.textPost.emit(textPhoto);
  }
*/
  



    public onClickPost1(urlPhoto:string){
    this.urlPost.emit(urlPhoto);
  }

      public onClickPost2(titlePhoto:string){
    this.titlePost.emit(titlePhoto);
    //alert(titlePhoto)DE CONTROL
  }

      public onClickPost3(textPhoto:string ){
    this.textPost.emit(textPhoto);
  }

}
