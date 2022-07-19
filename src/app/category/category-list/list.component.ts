import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-category-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  categories: Category[] = [];


  constructor(private categoryService : CategoryService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.categories = this.categoryService.getAll()
  }

}
