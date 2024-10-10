import { Component } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css',
})
export class AdminNavbarComponent {
  username: any;
  constructor(private router: Router) {    //injecting router service
    this.username = localStorage?.getItem('username');
  }

  onLogout() {
    this.router.navigateByUrl('/logout');
  }
}
