import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  public statusCurrent: string = 'hidden';
  public statusNew: string = 'visible';

  public status: string = this.statusCurrent;

  public onClick(event: MouseEvent) {
    //alert(event.target);
    if(this.status === this.statusCurrent){
      this.status=this.statusNew;
    }else{
      this.status=this.statusCurrent;
    }
  }
}
