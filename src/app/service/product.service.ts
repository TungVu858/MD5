import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {CategoryService} from "./category.service";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New',
    category : {
      id : 1,
      name : "Iphone"
    }
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new',
    category : {
      id : 1,
      name : "Iphone"
    }
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%',
    category : {
      id : 1,
      name : "Iphone"
    }
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%',
    category :{
      id : 1,
      name : "Iphone"
    }
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new',
    category : {
      id : 1,
      name : "Iphone"
    }
  }];
  categories : Category [] = [];
  getAllCategory(){
    this.categories = this.categoryService.getAll();
  }
  getAll() {
    return this.products;
  }

  saveProduct(product: any) {
    this.products.push(product);
  }

  findById(id: number) {
    return this.products.find(product => product.id === id)
  }

  updateProduct(id: number, product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
      }
    }
  }

  deleteProduct(id : number){
    this.products = this.products.filter(product =>{return product.id != id})
  }

  constructor(private categoryService : CategoryService) {
  }
}
