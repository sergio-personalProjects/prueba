import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() title:string='';
  @Input() photo:string='';
  @Input() status:boolean=true;

  @Input() statusPost:string='estado post';
  @Input() statusArticle:string='estado article';


  public onCloseModal():void{
   this.status=!this.status;
   this.statusPost='';
   this.statusArticle='none';
  }

  @Output() statusPostFromModal = new EventEmitter<string>();
  @Output() statusArticleFromModal = new EventEmitter<string>();

  public status1(statusPostFromModal:string):void{
    this.statusPostFromModal.emit(statusPostFromModal);
  }

  public status2(statusArticleFromModal:string):void{
    this.statusArticleFromModal.emit(statusArticleFromModal);
    alert(statusArticleFromModal);
  }
}
