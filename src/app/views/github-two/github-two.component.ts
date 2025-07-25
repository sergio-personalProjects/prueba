import { Component } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-github-two',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './github-two.component.html',
  styleUrl: './github-two.component.css'
})
export class GithubTwoComponent {
  public url: string = 'https://api.github.com/search/users?q=angular';
  public modalImage: string='';
  public modalText: string='';
  public modalStatus: string='modal';
  

  public contents: { loginUser: string, imageUser: string }[] = [] //Creamos un array donde almacenar la información

  public constructor(public service: RequestsService) { };

  public getResponse(): void {
    this.service.getResponse(this.url).subscribe((response) => {
      for (let i = 0; i < response.items.length; i++) {
        this.contents.push({
          loginUser: response.items[i].login,
          imageUser: response.items[i].avatar_url,
        })
      }
      /**COMPROBAR QUE SE HAN GUARDADO BIEN EN EL ARRAY */
      for (let i = 0; i < response.items.length; i++) {
        console.log(this.contents[i].loginUser)
      }
    })
  };

  /**EJERCICIO3 */
  public ngOnInit(): void {
    this.getResponse();
  };

  public onClick(i:number):void{
    this.modalImage='url('+this.contents[i].imageUser+')';
    this.modalText=this.contents[i].loginUser
    this.modalStatus='show-modal';
  }

  public closeModal():void{
    this.modalStatus='modal';
  }
}
