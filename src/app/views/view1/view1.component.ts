import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view1',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './view1.component.html',
  styleUrl: './view1.component.css'
})
export class View1Component {
  public photoAugment: string='';
  public statusAugmented: boolean=true;
  public case: string='elementor-grid-3';

  public contents:{name: string, urlPhoto:string}[][]=[
    [ {name:'Plátanos', urlPhoto:'https://s1.eestatic.com/2021/03/09/ciencia/nutricion/564704609_174935756_1706x960.jpg'},
      {name:'Kiwis', urlPhoto:'https://frutasolivar.com/wp-content/uploads/2019/02/rawpixel-603025-unsplash-e1579691765526.jpg'},
      {name:'Manzanas', urlPhoto:'https://cdn1.img.sputniknews.lat/img/07e6/0b/08/1132232783_0:257:2731:1793_1920x0_80_0_0_fdbda0e88e9a5ad09cdcc6a7a315c196.jpg'},
    ],
    [ {name:'Lechuga', urlPhoto:'https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/03/05/60421be64918d.jpeg'},
      {name:'Berenjena', urlPhoto:'https://estaticos-cdn.prensaiberica.es/clip/7d08691e-b082-4540-ad4f-51dc14f8d23b_16-9-aspect-ratio_default_0.jpg'},
      {name:'Cebollas', urlPhoto:'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/10/02/morada-blanca-charlota-para-que-se-utiliza-cada-tipo-de-cebolla.jpeg'},
    ],
  ];

  public onClick(i: number, j: number): void {
    if (this.case === 'elementor-grid-3') {
      this.case = 'elementor-grid-1';
      this.photoAugment = this.contents[i][j].urlPhoto;
    } else {
      this.case = 'elementor-grid-3';
    }
  }
}
