import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgStyle],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

public nameEjercicio1:string='Ejercicio 1';
public nameEjercicio2:string='Ejercicio 2';
public colorHeader:string='#C4001A';

public onHeader1(kind:number):void{
  if(kind===1){
    this.nameEjercicio1='Rick & Morty';
    this.colorHeader='maroon';
  }else{
    this.nameEjercicio1='Ejercicio 1';
    this.colorHeader='#C4001A'
  };
};

public onHeader2(kind:number):void{
  if(kind===1){
    this.nameEjercicio2='Pokemon';
    this.colorHeader='maroon';
  }else{
    this.nameEjercicio2='Ejercicio 2';
    this.colorHeader='#C4001A'
  };
};


}
