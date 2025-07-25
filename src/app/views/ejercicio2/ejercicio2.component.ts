import { Component } from '@angular/core';
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { EpisodeComponent } from "../../components/episode/episode.component";
import { RequestsService } from '../../services/requests.service';
import { ModalComponent } from "../../components/modal/modal.component";

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [CarouselComponent, EpisodeComponent, ModalComponent],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {
    public constructor(public service:RequestsService){}

    public currentCharacter:number=0;
    public name:string='NAME';
    public currentPage:number=1;
    public url:string='https://rickandmortyapi.com/api/character?page=' +this.currentPage;

    public contents:{name:string, image:string, id: number}[]=[];//AÑADI "ID" PARA PODER TRAZAR CON EL ARRAY DE EPISODEOS


    public getRickMortyAPI():void{
      this.contents=[];
      this.service.getRickMortyAPI(this.url).subscribe(response=>{
        for(let i=0; i<response.results.length;i++){
          this.contents.push({
            name:response.results[i].name,
            image:response.results[i].image,
            id:response.results[i].id
          })
        };
        /**DE CONTROL */
        for(let i=0; i<this.contents.length;i++){
          console.log(this.contents[i].name);
        };
    });
  };

  public ngOnInit():void{
    this.getRickMortyAPI()
    this.getEpisode()
  };

  public onInfoCarousel(character:number):void{
    this.currentCharacter=character;
  };

  public onPageCarousel(pageCarousel:number): void{
    this.currentPage=pageCarousel;
    this.url='https://rickandmortyapi.com/api/character?page=' +this.currentPage;
    this.contents=[];
    this.getRickMortyAPI();
  }


/**PARTE DE LOS EPISODEOS */
public nameEpisode:string='episodeo'
public dateEpisode:string='episodeo'
public episode:string='episodeo'
public currentEpisode:number=0;
public visbilityEpisode:string='none';
public urlEpisode:string='https://rickandmortyapi.com/api/episode?page='+this.currentPage;
public episodes:{name:string, date:string, episode: string}[]=[];

public getEpisode():void{
      this.contents=[];
      this.service.getRickMortyEpisodes(this.urlEpisode).subscribe(response=>{
        for(let i=0; i<response.results.length;i++){
          this.episodes.push({
            name:response.results[i].name,
            date:response.results[i].air_date,
            episode:response.results[i].episode
          })
        };
        /**DE CONTROL */
        for(let i=0; i<this.episodes.length;i++){
          console.log(this.episodes[i].episode);
        };
        this.nameEpisode=response.results[0].name;
        this.dateEpisode=response.results[0].air_date;
        this.episode=response.results[0].episode;
    });
  };

  public onVisibility(visible:string):void{
    this.visbilityEpisode=visible;
  };


  public onCurrentEpisode(i:number):void{
    this.currentEpisode=i;
  }

  /**MODAL */
  public modalVisibility:boolean=true;

  public openModal(status:boolean):void{
    this.modalVisibility=status;
  }

  public closeModal(status:boolean):void{
    this.modalVisibility=status;
  }
}
