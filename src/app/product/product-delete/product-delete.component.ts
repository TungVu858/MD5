import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category : new FormControl(),
  });
  id: number = 0;
  categories : string = '';
  constructor(private productService: ProductService,private active : ActivatedRoute,private router : Router,private categoryService :CategoryService) {
    this.active.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get("id");
      const product = this.getProduct(this.id);
      // @ts-ignore
      this.productForm.setValue(product)
      // @ts-ignore
      this.categories = product?.category?.name;
    });
  }

  getProduct(id: number) {
    return this.productService.findById(id);
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.router.navigate(['/product/list']);
  }
  ngOnInit(): void {
  }

}
