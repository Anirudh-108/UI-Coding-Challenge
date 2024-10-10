import { Component } from '@angular/core';
import { DoctorNavbarComponent } from '../doctor-navbar/doctor-navbar.component';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [DoctorNavbarComponent,ChartModule],
  templateUrl: './doctor-dashboard.component.html',
  styleUrl: './doctor-dashboard.component.css',
})
export class DoctorDashboardComponent {
  username = localStorage.getItem('username');

  /* for chart.js  */
  aptData: any;
  barOptions: any;
  specializationData: any;
  pieOptions: any;
  constructor() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.aptData = {
      labels: ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'],
      datasets: [
        {
          label: 'No. of Appointments',
          data: [15, 20, 10, 12, 18, 8],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgb(255, 159, 64)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(255, 159, 64)',
            'rgb(75, 192, 192)',
          ],
          borderWidth: 1,
        },
      ],
    };

    this.barOptions = {
      responsive: false,
      maintainAspectRatio: true,

      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },

      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        maintainAspectRatio: false,
      },
    };

    this.specializationData = {
      labels: ['Cardio', 'Pediatrics', 'Onchologist', 'General Medicine'],
      datasets: [
        {
          data: [4, 3, 2, 6],
          backgroundColor: ['blue', 'yellow', 'green', 'red'],
          borderColor: ['blue', 'yellow', 'green', 'red'],
        },
      ],
    };
    this.pieOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor,
          },
        },
      },
    };
  }
}
