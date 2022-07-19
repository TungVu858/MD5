import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category : new FormControl()
  });
  categories : Category [] = [];
  submit() {
    const product = this.productForm.value;
    let categoryId = +this.productForm.value.category
    const category = this.categories.find(category => category?.id === categoryId)
    this.productForm.value.category = {
      id : category?.id,
      name : category?.name
    }
    this.productService.saveProduct(product);
    this.productForm.reset();
    this.router.navigate(['/product/list']);
  }


  constructor(private productService: ProductService,private router : Router,private categoryService : CategoryService) {
    this.categories = this.categoryService.getAll();
  }

  ngOnInit(): void {
  }

}
