import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { Frutas } from './frutas.interface';


@Component({
  selector: 'app-frutas',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './frutas.component.html',
  styleUrl: './frutas.component.css'
})
export class FrutasComponent {

  /**USANDO LA INTERFACE */
  public fruits:Frutas[]=[
    {name: 'Plátanos', url: 'url(https://s1.eestatic.com/2021/03/09/ciencia/nutricion/564704609_174935756_1706x960.jpg)'}, //Objeto1
    {name: 'Kiwis', url: 'url(https://frutasolivar.com/wp-content/uploads/2019/02/rawpixel-603025-unsplash-e1579691765526.jpg)' }, //Objeto2
    {name: 'Manzanas', url: 'url(https://cdn1.img.sputniknews.lat/img/07e6/0b/08/1132232783_0:257:2731:1793_1920x0_80_0_0_fdbda0e88e9a5ad09cdcc6a7a315c196.jpg)' }, //Objeto3
    {name: 'Peras', url: 'url(https://farmaciaribera.es/blog/wp-content/uploads/2020/01/Beneficios-de-comer-peras-1024x680.jpg)' }, //Objeto4
  ];

}
