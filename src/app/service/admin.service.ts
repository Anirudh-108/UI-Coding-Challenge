import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Schedule } from '../model/schedule.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  getAllDoctorsApi: string = 'http://localhost:8082/doctor/all';

  schedule$ = new BehaviorSubject<Schedule>({});
  setScheduleSubject(obj: Schedule){
      this.schedule$.next(obj)
  }

  constructor(private http: HttpClient) {}

  getAllDoctors(): Observable<any> {
    return this.http.get<any>(this.getAllDoctorsApi, {
      headers: new HttpHeaders().set(
        'Authorization',
        'Bearer ' + localStorage.getItem('token')
      ),
    });
  }

  getDays(): Observable<any> {
    return this.http.get('http://localhost:8082/doctor/days');
  }

  postSchedule(obj: any): Observable<any> {
    return this.http.post('http://localhost:8082/doctor/schedule/add', obj, {
      headers: new HttpHeaders().set(
        'Authorization',
        'Bearer ' + localStorage.getItem('token')
      ),
    });
  }

  getDoctorSchedule(page: number, size: number): Observable<any> {
    return this.http.get(
      'http://localhost:8082/doctor/schedule/all?page=' +
        page +
        '&size=' +
        size,
      {
        headers: new HttpHeaders().set(
          'Authorization',
          'Bearer ' + localStorage.getItem('token')
        ),
      }
    );
  }

  getScheduleDetailesById(id: any): Observable<any> {
    return this.http.get('http://localhost:8082/doctor/schedule/get/' + id);
  }
}
