import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  
  pictureUrlCurrent: string="https://www.spain.info/export/sites/segtur/.content/images/cabeceras-grandes/comunidad-valenciana/ciudad-artes-ciencias-noche-valencia-pexel256150.jpg";
  pictureUrlNew = "https://www.lovevalencia.com/wp-content/uploads/2010/10/ciudad.jpg"
  pictureUrl: string = this.pictureUrlCurrent;

  public pictureIn(): void {
    //alert(event.target)
    this.pictureUrl=this.pictureUrlNew;
  }

  public pictureOut(): void {
    this.pictureUrl=this.pictureUrlCurrent;
  }




  /**OPCIÓN 1 */
  /*
  colorOn: boolean=true;
  public textColor(event: MouseEvent):void{
    //alert(event.target)
    let paragraph: HTMLElement =<HTMLElement>event.target;
    if(this.colorOn){
      paragraph.style.color='blue';
      this.colorOn=false;
    }else{
      paragraph.style.color='red';
    }
  }
  */
  /**OPCIÓN 2*/
  public textColorIn(event: MouseEvent): void {
    //alert(event.target)
    let paragraph: HTMLElement = <HTMLElement>event.target;
    paragraph.style.color = 'blue';
    this.pictureUrl ="https://www.lovevalencia.com/wp-content/uploads/2010/10/ciudad.jpg"
  }

  public textColorOut (event: MouseEvent): void {
    let paragraph: HTMLElement = <HTMLElement>event.target;
    paragraph.style.color = 'black';
    this.pictureUrl;
  }



}
