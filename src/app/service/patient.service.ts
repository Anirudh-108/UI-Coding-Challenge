import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  personalInfo$ = new BehaviorSubject({
    name: '',
    email: '',
    contact: '',
  });
  medicalInfo$ = new BehaviorSubject({
    illness: '',
    duration: '',
    details: '',
  });
  roomInfo$ = new BehaviorSubject({
    type: '',
  });

  constructor() {}

  setPersonalInfo(name: string, email: string, contact: string): void {
    this.personalInfo$.next({
      name: name,
      email: email,
      contact: contact,
    });
  }
  setMedicalInfo(illness: string, duration: string, details: string): void {
    this.medicalInfo$.next({
      illness: illness,
      duration: duration,
      details: details,
    });
  }

  setRoomInfo(type: string): void {
    this.roomInfo$.next({
      type: type,
    });
  }
}
