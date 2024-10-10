import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AdminNavbarComponent } from "../admin-navbar/admin-navbar.component";

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [AdminNavbarComponent,RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {

}
