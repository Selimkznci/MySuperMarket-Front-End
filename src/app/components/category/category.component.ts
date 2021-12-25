import { Component, OnInit } from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Category[] = [];
  currentCategory!: Category;
  constructor(private categorySerice:CategoryService) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.categorySerice.getCategory().subscribe(Response => {
      this.categories=Response.data
    })
  }
  setCurrentCategory(category:Category){
     this.currentCategory = category
  }

  getCurrentCategoryClass(category:Category){
    if (category==this.currentCategory) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}
