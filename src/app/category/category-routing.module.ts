import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryCreateComponent} from "./category-create/category-create.component";
import {ListComponent} from "./category-list/list.component";
const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'create',
    component: CategoryCreateComponent
  },
  // {
  //   path: 'edit/:id',
  //   component: CategoryEditComponent
  // },
  // {
  //   path: 'delete/:id',
  //   component: CategoryDeleteComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
