import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Router, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Schedule } from '../../model/schedule.model';
import { ProductService } from '../../service/product.service';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: any[] = [];
  stringMsg: string = '';
  viewProduct: boolean = false;
  totalPages: number = 0;
  numArry: number[] = [];
  counter: number = 0;
  page: number = 0;
  size: number = 3;
  last: boolean = false;
  first: boolean = true;

  constructor(private productService: ProductService, private router: Router) {
    this.fetchData();
  }

  fetchData() {
    this.productService.getAllProducts(this.page, this.size).subscribe({
      next: (data) => {
        this.products = data;
        this.totalPages = data.totalPages;
        this.last = data.last;
        this.first = data.first;

        if (this.counter === 0) {
          let i = 0;
          while (i < this.totalPages) {
            this.numArry.push(i);
            i++;
          }
        }
        this.counter = this.counter + 1;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onDescription(description:string){
    this.router.navigateByUrl('/description/' + description);
  }


  onEdit(id: number) {
    this.router.navigateByUrl('/edit-product/' + id);
  }

  onDelete(id: any) {
    this.productService.deleteProduct(id).subscribe({
      next: (data) => {
        console.log(data);
        this.stringMsg = 'Product Deleted';
        this.products.filter((p) => {
          p.id != id;
        });
        this.fetchData();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onPageNumberClick(n: number) {
    this.page = n;
    this.fetchData();
  }

  onNext() {
    this.page = this.page + 1;
    this.fetchData();
  }

  onPrev() {
    this.page = this.page - 1;
    this.fetchData();
  }

  //   products: any[] = [];

  //   stringMsg:string;

  //   constructor(private productService: ProductService, private router: Router) {}

  //   ngOnInit() {
  //     this.productService.getAllProducts().subscribe({
  //       next: (data) => {
  //         this.products = data;
  //       },
  //       error: (err) => {
  //         console.log(err);
  //       },
  //     });
  //   }

  //   onEdit(id: number) {
  //     this.router.navigateByUrl('/edit-product/'+id);
  //   }

  //   onDelete(id: any){
  //     this.productService.deleteProduct(id)
  //     .subscribe({
  //       next: (data) => {
  //         console.log(data)
  //         this.stringMsg = "Product Deleted"
  //         window.location.reload();
  //       },
  //       error: (err) => {
  //         console.log(err)
  //       }
  //     })
  //   }
}
