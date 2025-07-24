import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() modalClass: string= 'modal';
  @Input() arrayResidents:{name:string, image:string}[]=[];
  @Output() close = new EventEmitter <string>();
  public currentResident:number=0;
  @Output() currentResidentModal = new EventEmitter<number>();
  @Input() imageResident:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fobKqzyKJ53smXQId9FjD4iK7UuvujF2ZA&s';
  @Input() nameResident:string='';
  

  public closeModal():void{
    this.close.emit('modal');
  };



  public customPage(numberResident:number):void{
    if(numberResident===1){
      if(this.currentResident!=0){
        this.currentResident++;
      }
      this.currentResidentModal.emit(this.currentResident);
      
    }else{
      if(this.currentResident===1){
        this.currentResident=1;
      }else{
        this.currentResident--;
      }
      
      this.currentResidentModal.emit(this.currentResident);
    }
  }



}


