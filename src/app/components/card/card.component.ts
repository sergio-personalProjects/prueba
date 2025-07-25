import { Component, Input } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { NgStyle } from '@angular/common';
import { MemeComponent } from '../../views/meme/meme.component';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgStyle, MemeComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() titleMeme:string='tituloHIJO';
  @Input() imageMeme:string='';
}
