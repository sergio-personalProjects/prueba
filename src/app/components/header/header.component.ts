import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public counter: number = 0;

  onClick(event: MouseEvent) {
    this.counter++;
    alert(event.target +"este es el numero: " +this.counter);
}

}
