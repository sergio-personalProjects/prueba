import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() modalStatus:boolean=true;
  @Input() modalImageMeme: string ='';
  @Input() modalTitleMeme: string='Nombre'
  @Output() close = new EventEmitter<boolean>();

  public closeModal():void{
    this.close.emit(true);
  };

}
