import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent {
  
  userForm: FormGroup; 

  constructor(){
    this.userForm = new FormGroup({
      name : new FormControl('', [Validators.required, Validators.minLength(5)]),
      email : new FormControl('', Validators.email),
      city : new FormControl('',Validators.required),
      company : new FormControl('', Validators.required),
      website : new FormControl('',Validators.pattern("^[w]{3}.[a-zA-Z0-9].[a-z]{2-4}$")),
    })
  }

  onSubmit(){
    console.log(this.userForm.value);
  }
}