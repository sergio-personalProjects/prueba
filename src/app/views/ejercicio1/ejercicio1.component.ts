import { Component } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { GithubComponent } from "../../components/github/github.component";
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [GithubComponent, NgStyle],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {

  public constructor(public service:RequestsService){}


  public searchTerm:string='Angular';
  public customURL:string='https://api.github.com/search/users?q='+this.searchTerm;
  
  //Elegir entre angular o symfony
  public status: number=0;

  //Variables para la imagen y nombre del detalle
  public nameDetail:string='perfil';
  public imageDetail:string='';
  
  //Mostrar grid o detalle /**PARA UTILIZAR EL OUTPUT */
  public displayDetail:string='';
  public displayGrid:string='';
  
  
  public contentsAngular:{login:string, avatar:string}[]=[];
  public contentsSymfony:{login:string, avatar:string}[]=[];

  public ngOnInit():void{
    this.onClickFather(0);
    // Inicializar los valores de display
    this.displayDetail='none';
    this.displayGrid='';
  };
  

  public onClickFather(kind:number):string{
    if(kind===0){
      this.searchTerm='Angular';
      //Actualizar customURL después de cambiar searchTerm
      this.customURL = 'https://api.github.com/search/users?q=' + this.searchTerm;
      
      this.contentsAngular = [];

      this.service.getAngularAPI(this.customURL).subscribe(response=>{
      for(let i=0; i<=5;i++){
        this.contentsAngular.push({
          login:response.items[i].login,
          avatar:response.items[i].avatar_url
        })
      }
    })
      return this.status=0, this.contentsAngular, this.searchTerm;

    }else{
      this.searchTerm='Symfony';
      this.customURL = 'https://api.github.com/search/users?q=' + this.searchTerm;

      this.contentsSymfony = [];

      this.service.getAngularAPI(this.customURL).subscribe(response=>{
        for(let i=0; i<=5;i++){
          this.contentsSymfony.push({
            login:response.items[i].login,
            avatar:response.items[i].avatar_url
          })
        }
      })
      return this.status=1, this.contentsSymfony, this.searchTerm;
    }
  };

 
  public statusAppGithub(data:{displayDetailHIJO:string, displayGridHIJO:string}):void{
    this.displayDetail=data.displayDetailHIJO;
    this.displayGrid=data.displayGridHIJO;

  };
}
