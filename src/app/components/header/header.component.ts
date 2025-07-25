import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  public onFruit: boolean =true;
  public textH2: string ='Tu frutería de confianza'
  public textH1: string ='FRUTAS'
  public url1: string ='https://s1.eestatic.com/2018/11/21/ciencia/nutricion/nutricion-frutas-higiene_354976032_106782952_1706x960.jpg';
  public url2: string ='https://phantom-marca.unidadeditorial.es/f26736e71a6bfb79e3a2b0c631a1bf4e/resize/828/f/jpg/assets/multimedia/imagenes/2023/05/30/16854588843943.jpg';
  public titleH2 =this.textH2;
  public titleH1 = this.textH1;
  public urlPhotoFruit1=this.url1
  public urlPhotoFruit2=this.url2

  public onClickFruits():void{
  this.onFruit = true;
  this.titleH2=this.textH2;
  this.titleH1=this.textH1;
  this.urlPhotoFruit1
  }

  public onClickVegetables():void{
  this.onFruit = false;
  this.titleH2= 'Tu verdulería de confianza';
  this.titleH1= 'VERDURAS';
  this.urlPhotoFruit2
  }
}
