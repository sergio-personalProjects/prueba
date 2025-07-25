import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css'
})
export class GithubComponent {

@Input() status:number=0;
@Input() nameContent: string='nameContent';
@Input() contentsAngularGithub:{login:string, avatar:string}[]=[];
@Input() contentsSymfonyGithub:{login:string, avatar:string}[]=[];
@Output() data = new EventEmitter<{displayDetailHIJO:string, displayGridHIJO:string}>();


  
  //Mostrar grid o detalle
  @Input()  displayDetailHIJO:string=''; //PODRÍAMOS DEVOLVER ESTO AL PADER
  @Input()  displayGridHIJO:string=''; //PODRÍAMOS DEOVLVER ESTO AL PADRE

//Variables para la imagen y nombre del detalle
  public nameDetail:string='';
  public imageDetail:string='';


public onClickDetail(i:number):void{
    if(this.status===0){
      this.displayDetailHIJO='';
      this.displayGridHIJO='none';
      this.imageDetail=this.contentsAngularGithub[i].avatar
      this.nameDetail=this.contentsAngularGithub[i].login

    }else{
      this.displayDetailHIJO='';
      this.displayGridHIJO='none';
      this.imageDetail=this.contentsSymfonyGithub[i].avatar
      this.nameDetail=this.contentsSymfonyGithub[i].login
    }
    this.data.emit({displayDetailHIJO:this.displayDetailHIJO, displayGridHIJO: this.displayGridHIJO})
  };

  public returnInitial():void{
    this.data.emit({displayDetailHIJO:'none', displayGridHIJO: ''})
  }

  



}
