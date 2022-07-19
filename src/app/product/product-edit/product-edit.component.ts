import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category : new FormControl()
  });
  id: number = 0;
  categories : Category [] = [];
  categoryId: number = 0;
  constructor(private productService: ProductService,private active : ActivatedRoute,private router : Router,private categoryService : CategoryService) {
    this.active.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get("id");
      this.categories = this.categoryService.getAll();
      const product = this.getProduct(this.id);
      // @ts-ignore
      this.productForm.setValue(product)
      // @ts-ignore
      this.categoryId = product?.category?.id
    });
  }

  getProduct(id : number){
    return this.productService.findById(id)
  }
  updateProduct(id: number) {
    const product = this.productForm.value;
    let categoryId = +this.productForm.value.category
    const category = this.categories.find(category => category?.id === categoryId)
    this.productForm.value.category = {
      id : category?.id,
      name : category?.name
    }
    this.productService.updateProduct(id, product);
    alert('Cập nhật thành công');
    this.router.navigate(['/product/list']);
  }
  ngOnInit(): void {
  }

}
