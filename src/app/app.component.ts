import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  // template: '<h1>{{title}}<h1>',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo!!!';
  message = 'welcome my hourse -by zhaoxue';
}
