import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view3',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './view3.component.html',
  styleUrl: './view3.component.css'
})
export class View3Component {
  public photoFruit:string='https://s1.eestatic.com/2021/03/09/ciencia/nutricion/564704609_174935756_1706x960.jpg';
  public photoVegetable:string='https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/03/05/60421be64918d.jpeg';
  public titleFruit: string ='FRUTA';
  public titleVegetable: string ='VERDURAS';
  public statusTipe: boolean=true;
  public displayType: string= 'inline-block';
  public displayPhotos: string= 'none';
  public displayDetail: string= 'none';
  public photos: string='';

  /*public contents: string[][]=[
    [
      'https://s1.eestatic.com/2021/03/09/ciencia/nutricion/564704609_174935756_1706x960.jpg',
      'https://beatrixblog.files.wordpress.com/2014/09/naranja-4.jpg?w=584',
      'https://cdn1.img.sputniknews.lat/img/07e6/0b/08/1132232783_0:257:2731:1793_1920x0_80_0_0_fdbda0e88e9a5ad09cdcc6a7a315c196.jpg'
    ],
    [
      'https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/03/05/60421be64918d.jpeg',
      'https://estaticos-cdn.prensaiberica.es/clip/7d08691e-b082-4540-ad4f-51dc14f8d23b_16-9-aspect-ratio_default_0.jpg',
      'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/10/02/morada-blanca-charlota-para-que-se-utiliza-cada-tipo-de-cebolla.jpeg'
    ]
   ];*/


  public arrayFruits: string[]=[
      'https://s1.eestatic.com/2021/03/09/ciencia/nutricion/564704609_174935756_1706x960.jpg',
      'https://beatrixblog.files.wordpress.com/2014/09/naranja-4.jpg?w=584',
      'https://cdn1.img.sputniknews.lat/img/07e6/0b/08/1132232783_0:257:2731:1793_1920x0_80_0_0_fdbda0e88e9a5ad09cdcc6a7a315c196.jpg'
  ];


  public arrayVegetables: string[]=[
      'https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/03/05/60421be64918d.jpeg',
      'https://estaticos-cdn.prensaiberica.es/clip/7d08691e-b082-4540-ad4f-51dc14f8d23b_16-9-aspect-ratio_default_0.jpg',
      'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/10/02/morada-blanca-charlota-para-que-se-utiliza-cada-tipo-de-cebolla.jpeg'
  ];
  

  public onClick(option:number):void{
    if(option===1){
        this.statusTipe=true;
        this.arrayFruits;
        this.displayType='none'
        this.displayPhotos='inline-block'
        
    }else{
      this.statusTipe=false;
      this.arrayVegetables;
      this.displayType='none'
      this.displayPhotos='inline-block'
    }
  };

  public photoAugmented(i:number){
    if(this.statusTipe){
      this.photos=this.arrayFruits[i];
      //alert(this.photos) //solo para control
      this.displayDetail='inline-block';
    }else{
      this.photos=this.arrayVegetables[i];
      //alert(this.photos) //solo para control
      this.displayDetail='inline-block';
      
    }
  }

  public detailImage(){
    this.displayDetail='none';
    this.displayPhotos='none'
    this.displayType= 'inline-block';
  }




}
