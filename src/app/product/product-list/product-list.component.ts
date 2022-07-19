import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories : Category [] = [];
  constructor(private productService : ProductService,private categoryService : CategoryService) { }

  ngOnInit(): void {
    this.getAll();
    // this.getAllCategory();
  }
  getAll(){
    this.products = this.productService.getAll();
  }

}
