import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { User } from './_models/user';
import { AuthenticationService } from './_services/authentication.service';
import { LoginComponent } from './login/login.component';
import { NodeListComponent } from './node-list/node-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NodeListComponent, LoginComponent, RouterOutlet, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'financial-accounting-system-angular-front';
  user?: User | null;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe(x => this.user = x);
  }

  logout() {
      this.authenticationService.logout();
  }
}
