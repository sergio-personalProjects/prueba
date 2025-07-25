import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-meme',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './meme.component.html',
  styleUrl: './meme.component.css'
})
export class MemeComponent {
  public url: string='https://api.imgflip.com/get_memes';
  public contentsMemes: {nameMeme:string, imageMeme: string}[]=[] //Creamos un array donde almacenar la información

  public constructor(public service: RequestsService){};

  public getResponseMemeApi():void{
    this.service.getResponseMemeApi(this.url).subscribe((response) =>{
      for(let i=0; i<response.data.memes.length;i++){ // Cuando utilizamos como limite la longitud del ARRAY NUNCA poner signo "=" sino dará error.
        this.contentsMemes.push({
          nameMeme: response.data.memes[i].name,
          imageMeme: response.data.memes[i].url,
        })
      }
      /**COMPROBAR QUE SE HAN GUARDADO BIEN EN EL ARRAY */
      for(let i=0; i<this.contentsMemes.length;i++){
        console.log(this.contentsMemes[i].nameMeme)
      }
    })
  };
  public ngOnInit():void{
    this.getResponseMemeApi();
  };
}
