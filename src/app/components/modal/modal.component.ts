import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() modalStatus:boolean=true;
  @Input() modalTitleMeme:string='tituloHIJO';
  @Input() modalImageMeme:string='';


  public closeModal():void{
    this.modalStatus=!this.modalStatus;
  }

}
