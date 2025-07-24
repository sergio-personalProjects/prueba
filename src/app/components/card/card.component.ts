import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() nameCard:string='nameCard';
  @Input() dimensionCard:string='dimensionCard';
  @Output() open = new EventEmitter<string>();


  public openModal():void{
    
    this.open.emit('modal show-modal');
  }

}
