import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  public fruits: { name: string; url: string }[][] = [
    [ { name: 'Plátanos', url: 'https://s1.eestatic.com/2021/03/09/ciencia/nutricion/564704609_174935756_1706x960.jpg', },], //pos0
    [ { name: 'Kiwis',    url: 'https://frutasolivar.com/wp-content/uploads/2019/02/rawpixel-603025-unsplash-e1579691765526.jpg', },], //pos1
    [ { name: 'Manzanas', url: 'https://cdn1.img.sputniknews.lat/img/07e6/0b/08/1132232783_0:257:2731:1793_1920x0_80_0_0_fdbda0e88e9a5ad09cdcc6a7a315c196.jpg', },], //pos2
    [ { name: 'Peras',    url: 'https://farmaciaribera.es/blog/wp-content/uploads/2020/01/Beneficios-de-comer-peras-1024x680.jpg', }, ], //pos3
  ];

  public vegetables: { name: string; url: string }[][] = [
    [ { name: 'Lechuga',  url: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/03/05/60421be64918d.jpeg', }, ],//pos0
    [ { name: 'Tomates',  url: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/03/07/17098165627875.jpg', }, ],//pos1
    [ { name: 'berenjenas',  url: 'https://estaticos-cdn.prensaiberica.es/clip/7d08691e-b082-4540-ad4f-51dc14f8d23b_16-9-aspect-ratio_default_0.jpg', }, ],//pos2
    [ { name: 'Cebollas',    url: 'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/10/02/morada-blanca-charlota-para-que-se-utiliza-cada-tipo-de-cebolla.jpeg', }, ],//pos3
  ];


  /**LOGICA PARA EL MODAL*/
public modal:boolean=true;
public modalTitle: string =''
public modalImage: string ='';

  public onClickModalVegetables(i:number):void{
    this.modal=!this.modal;
    console.log(this.vegetables[i][0].name)//Esto unicamente es para controlar que sale el nombre correcto
    console.log(this.vegetables[i][0].url)
    this.modalTitle=this.vegetables[i][0].name;
    this.modalImage=this.vegetables[i][0].url;
  }

  public onClickModalFruits(i:number):void{
    this.modal=!this.modal;
    console.log(this.fruits[i][0].name)//Esto unicamente es para controlar que sale el nombre correcto
    this.modalTitle=this.fruits[i][0].name;
    this.modalImage=this.fruits[i][0].url;
  }

  public onCloseModal():void{
    this.modal=true;
  }
}
