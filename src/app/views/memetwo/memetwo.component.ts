import { Component } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-memetwo',
  standalone: true,
  imports: [[CardComponent],],
  templateUrl: './memetwo.component.html',
  styleUrl: './memetwo.component.css'
})
export class MemetwoComponent {
    public url: string='https://api.imgflip.com/get_memes';
    public contentsMemes: {nameMeme:string, imageMeme: string}[]=[] //Creamos un array donde almacenar la información
    public current:number=0;
    
    public constructor(public service: RequestsService){};
  
    public ngOnInit():void{
      this.getResponseMemeApi();
    };

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

    /**LÓGICA PARA LOS BOTONES */
    public onPrevious():void{
      if(this.current === 0){
        this.current = this.contentsMemes.length;
      }else{
        this.current=this.current-1;
      }
    }

    public onNext():void{
      if(this.current === this.contentsMemes.length){
        this.current = 0;
      }else{
        this.current=this.current+1;
      }
    }
}
