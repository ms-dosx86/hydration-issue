import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { IconComponent } from './icon/icon.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IconButtonComponent, IconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hydration-issue';
}
