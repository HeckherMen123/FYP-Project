import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './login/login.component.html',
  styleUrl: './login/login.component.scss'
})
export class AppComponent {
  title = 'alumni-management-system';
}
