import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {
  editProductForm: FormGroup

  title: any
  category: any
  price: any
  description: any
  quantity: any
  id: any

  constructor(private actRoute: ActivatedRoute, private router: Router, private productService: ProductService){}

  ngOnInit(){
    this.id = this.actRoute.snapshot.paramMap.get('id')

    this.productService.getProductDetails(this.id)
    .subscribe({
      next: (data) => {
        console.log(data)
        this.title = data.title
        this.category = data.category
        this.description = data.description
        this.price = data.price
        this.quantity = data.quantity
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  editProduct(){
    this.id = this.actRoute.snapshot.paramMap.get('id');

    this.productService.editProduct(this.id, {
      "title":this.title,
      "category":this.category,
      "description": this.description,
      "price": this.price,
      "quantity": this.quantity
    })
    .subscribe({
      next: (data) => {
        this.router.navigateByUrl("/product-list")
      },
      error: (err) => {
        console.log(err);
      }
    })
  }



}
