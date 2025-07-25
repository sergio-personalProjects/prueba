import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ArticleComponent } from "../../components/article/article.component";
import { ModalComponent } from '../../components/modal/modal.component';
import { PostComponent } from '../../components/post/post.component';
import { Pescados } from './pescados.interface';

@Component({
  selector: 'app-pescados',
  standalone: true,
  imports: [NgStyle, ArticleComponent, ModalComponent, PostComponent],
  templateUrl: './pescados.component.html',
  styleUrl: './pescados.component.css'
})
export class PescadosComponent {
public statusPost:string='';
public statusArticle:string='none';

  /*public contents:{title: string, text:string, url: string}[]=[
      {
        title: 'Rodaballo',
        text:'Rodaballo fresco',
        url: 'url(https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107521488.jpg)'
      }, //Objeto0 
      {
        title: 'Rape',
        text:'Rape del Cantábrico',
        url: 'url(https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107530435.jpg)'
      }, //Objeto1 
      {
        title: 'Mero',
        text:'Mero del Mediterráneo',
        url: 'url(https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107493872.jpg)'
      }, //Objeto2 
      {
        title: 'Bonito',
        text:'Bonito del Norte',
        url: 'url(https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107503223.jpg)'
      }, //Objeto3 
      {
        title: 'Lubina',
        text:'Lubina de estero',
        url: 'url(https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107517092.jpg)'
      }, //Objeto4
      {
        title: 'San Martín',
        text:'Pez de San Pedro',
        url: 'url(https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107498663.jpg)'
      }, //Objeto5
  ];*/

 /**USANDO LA INTERFACE */
public contents:Pescados[]=[
      {
        title: 'Rodaballo',
        text:'Rodaballo fresco',
        url: 'url(https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107521488.jpg)'
      }, //Objeto0 
      {
        title: 'Rape',
        text:'Rape del Cantábrico',
        url: 'url(https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107530435.jpg)'
      }, //Objeto1 
      {
        title: 'Mero',
        text:'Mero del Mediterráneo',
        url: 'url(https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107493872.jpg)'
      }, //Objeto2 
      {
        title: 'Bonito',
        text:'Bonito del Norte',
        url: 'url(https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107503223.jpg)'
      }, //Objeto3 
      {
        title: 'Lubina',
        text:'Lubina de estero',
        url: 'url(https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107517092.jpg)'
      }, //Objeto4
      {
        title: 'San Martín',
        text:'Pez de San Pedro',
        url: 'url(https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107498663.jpg)'
      }, //Objeto5
  ];






public postImage:string='';//Para recibir info de POST y enviar al article y modal
public postTitle:string='';//Para recibir info de POST y enviar al article y modal
public postText:string='';//Para recibir info de POST y enviar al article y modal


public imagePost1(urlPhotoPost:string):void{
  this.postImage=urlPhotoPost;
  //alert(this.postImage);//DE CONTROL
  this.statusPost='none';
  this.statusArticle='';
}

public imagePost2(titlePhotoPost:string):void{
  this.postTitle=titlePhotoPost;
  //alert(this.postTitle);//DE CONTROL
}

public imagePost3(textPhotoPost:string):void{
  this.postText=textPhotoPost;
  //alert(this.postText);//DE CONTROL
}



public modalImage:string='';//Para enviar al modal
public modalTitle:string='';//Para enviar al modal
public modalState:boolean=true;//Para enviar al modal


  /*INFORMACIÓN RECIBIDA DEL COMPONENTE HIJO (ARTICLE)*/
public imageDetail(urlPhotoArticle:string):void{
  //alert(urlPhotoArticle); //DE CONTROL
  this.modalImage=urlPhotoArticle;
  this.modalState=!this.modalState;
}


public imageDetailTitle(titlePhotoArticle:string):void{
  //alert(urlPhotoArticle); //DE CONTROL
  this.modalTitle=titlePhotoArticle;
}


public statusModal1(statusFromPost:string):void{
  //alert(urlPhotoArticle); //DE CONTROL
  this.statusPost=statusFromPost;
}

public statusModal2(statusFromPost2:string):void{
  //alert(urlPhotoArticle); //DE CONTROL
  this.statusArticle=statusFromPost2;
}



}
