import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, NgStyle],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  public statusHeader:string='0px';

  public onHeader(status:number):void{
    if(status===1){
      this.statusHeader='10px';
      //alert(status);
    }else{
      this.statusHeader='0px';
    }
  }
}
