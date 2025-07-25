import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view2',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './view2.component.html',
  styleUrl: './view2.component.css'
})
export class View2Component {

    public paragraphs:number[]=[];
    public i: number=5;

    public onClick():void{
        if(this.paragraphs.length < this.i){
            this.paragraphs.push(1);
            this.i=5;
        }else{
            this.paragraphs.pop();
            this.i=1;
        }
    }
}
