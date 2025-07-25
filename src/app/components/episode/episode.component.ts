import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.css'
})
export class EpisodeComponent {
  
  
  @Input() displayHIJO:string='none';
  @Input() arrayContentsEpisodes:{name:string, date:string, episode: string}[]=[];

  @Input() nameEpisode:string='nameEpisode';
  @Input() dateEpisode:string='dateEpisode';
  @Input() numberEpisode:string='numberEpisode';
  @Input() currentPageEjercicio2:number=1;
  @Output() current = new EventEmitter<number>();
  public currentEpisode:number=0;



  public onClickPrevious():void{
    this.currentEpisode--
    this.current.emit(this.currentEpisode);
  };

  public onClickNext():void{
    this.currentEpisode++;
    this.current.emit(this.currentEpisode);
  }
}
