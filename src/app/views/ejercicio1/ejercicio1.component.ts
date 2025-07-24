import { Component } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { NgStyle } from '@angular/common';
import { CardComponent } from "../../components/card/card.component";
import { ModalComponent } from "../../components/modal/modal.component";

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [NgStyle, CardComponent, ModalComponent],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {

  public constructor(public service: RequestsService) { }

  public namePlanet: string = '';
  public dimension: string = '';
  public currentPage: number = 1;
  public url: string = 'https://rickandmortyapi.com/api/location?page=' + this.currentPage;

  public contentsPlanets: { name: string, dimension: string }[] = [];


  public getResponse(): void {
    this.service.getResponseRickMorty(this.url).subscribe(response => {

      for (let i = 0; i < response.results.length; i++) {
        this.contentsPlanets.push({
          name: response.results[i].name,
          dimension: response.results[i].dimension
        })

      };
    });
  };

  public ngOnInit(): void {
    this.getResponse();
    this.getCarousel2();
  };

  public pageControl(kind: number): void {
    if (kind === 1) {
      this.currentPage++;

      this.url = 'https://rickandmortyapi.com/api/location?page=' + this.currentPage;
    } else {
      this.currentPage--;

      this.url = 'https://rickandmortyapi.com/api/location?page=' + this.currentPage;
    }
    this.contentsPlanets = [];
    this.getResponse();
  };


  /*MODAL */
  public showModal: string = 'modal';

  public openModal(modal: string): void {
    this.showModal = modal;
  };

  public closeModal(modal: string): void {
    this.showModal = modal;
  };

  public currentResident: number = 0;
  public urlResident: string = '';
  public resident: string = '';
  public contentsResidents: { name: string, image: string }[] = [];



  public getCarousel2(): void {
    this.service.getResponseRickMorty(this.url).subscribe(response => {
      for (let i = 0; i < response.results.length; i++) {
        for (let j = 0; j < response.results.length; j++) {
          this.urlResident = response.results[i].residents[j];

          this.service.getResponseResidents(this.urlResident).subscribe(response => {

            this.contentsResidents.push({
              name: response.name,
              image: response.image
            })
            console.log(this.contentsResidents[i].name);
          });
        };
      };
    });
  };

  public residentModal(resident: number): void {
    this.currentResident = resident;
  }


}
