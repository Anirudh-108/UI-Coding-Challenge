import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor,NgIf,RouterLink],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  userForm: FormGroup;

  successMsg:string=undefined;
  errorMsg:string=undefined;

  constructor(private productService: ProductService) {
    this.userForm = new FormGroup({
      title: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      quantity: new FormControl('', Validators.required),
    });
  }

  onAdd(){
    this.productService.addProduct({
      title: this.userForm.value.title,
      category: this.userForm.value.category,
      price: this.userForm.value.price,
      description: this.userForm.value.description,
      quantity: this.userForm.value.quantity,
    }).subscribe({
      next: (data) => {
        this.successMsg = 'Product added successfully';
      },
      error: (err) => {
        this.errorMsg = 'Product not added ';
      },
    });
  }

}
