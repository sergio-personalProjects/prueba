import { Component } from '@angular/core';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css'
})
export class GithubComponent {
  public url: string='https://api.github.com/search/users?q=developer';
  public contents: {loginUser:string, imageUser: string}[]=[] //Creamos un array donde almacenar la información

  public constructor(public service: RequestsService){};

  public getResponse():void{
    this.service.getResponse(this.url).subscribe((response) =>{
      for(let i=0; i<response.items.length;i++){ // Cuando utilizamos como limite la longitud del ARRAY NUNCA poner signo "=" sino dará error.
        this.contents.push({
        loginUser: response.items[i].login,
        imageUser: response.items[i].avatar_url,
      })
      }
      /**COMPROBAR QUE SE HAN GUARDADO BIEN EN EL ARRAY */
      for(let i=0; i<response.items.length;i++){
        console.log(this.contents[i].loginUser)
      }
    })
  };
  /**EJERCICIO1 */
  public onClick():void{
    this.getResponse();
  }
}
