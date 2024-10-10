import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AdminService } from '../../../service/admin.service';
import { AdminDashboardComponent } from "../admin-dashboard/admin-dashboard.component";
import { AdminNavbarComponent } from "../admin-navbar/admin-navbar.component";

@Component({
  selector: 'app-doctor-list',
  standalone: true,
  imports: [NgFor, AdminDashboardComponent, AdminNavbarComponent],
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.css',
})
export class DoctorListComponent {
  doctors: any[] = [];

  constructor(private adminService: AdminService) {
    this.adminService.getAllDoctors().subscribe({
      next: (data) => {
        this.doctors = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
