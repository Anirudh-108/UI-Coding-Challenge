import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-description',
  standalone: true,
  imports: [],
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.css'
})
export class ProductDescriptionComponent implements OnInit{

  description:string;

  constructor(private actRoute: ActivatedRoute){}

  ngOnInit(){
    this.description = this.actRoute.snapshot.paramMap.get('description');
  }
}
