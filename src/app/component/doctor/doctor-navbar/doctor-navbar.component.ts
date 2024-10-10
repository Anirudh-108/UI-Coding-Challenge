import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-doctor-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './doctor-navbar.component.html',
  styleUrl: './doctor-navbar.component.css',
})
export class DoctorNavbarComponent {
  username: any;

  constructor(private router: Router) {
    this.username=localStorage.getItem('username');
  }
  onLogout() {
    this.router.navigateByUrl('/logout');
  }
}
