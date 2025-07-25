import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ModalComponent } from "../../components/modal/modal.component";
import { ArticleComponent } from "../../components/article/article.component";
import { Verduras } from './verduras.interface';

@Component({
  selector: 'app-verduras',
  standalone: true,
  imports: [NgStyle, ModalComponent, ArticleComponent],
  templateUrl: './verduras.component.html',
  styleUrl: './verduras.component.css'
})
export class VerdurasComponent {

   /**USANDO LA INTERFACE */
    public vegetables:Verduras[]=[
      {
        title: 'Lechuga',
        text:'Lechugas frescas del día',
        url: 'url(https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/03/05/60421be64918d.jpeg)'
      }, //Objeto0 
      {
        title: 'Tomate',
        text:'Tomates del Perelló',
        url: 'url(https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/03/07/17098165627875.jpg)'
      }, //Objeto1 
      {
        title: 'Berenjena',
        text:'Berenjenas de Almagro',
        url: 'url(https://estaticos-cdn.prensaiberica.es/clip/7d08691e-b082-4540-ad4f-51dc14f8d23b_16-9-aspect-ratio_default_0.jpg)'
      }, //Objeto2 
      {
        title: 'Cebolla',
        text:'Cebolla dulce',
        url: 'url(https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/10/02/morada-blanca-charlota-para-que-se-utiliza-cada-tipo-de-cebolla.jpeg)'
      }, //Objeto3 
  ];

public modalImage:string='';//Para enviar al modal
public modalTitle:string='';//Para enviar al modal
public modalState:boolean=true;//Para enviar al modal

  /*INFORMACIÓN RECIBIDA DEL COMPONENTE HIJO (ARTICLE)*/
  public imageDetail(urlPhotoArticle:string):void{
    this.modalImage=urlPhotoArticle;
    this.modalState=!this.modalState;
  }


  public imageDetailTitle(titlePhotoArticle:string):void{
    this.modalTitle=titlePhotoArticle;
  }
















}
