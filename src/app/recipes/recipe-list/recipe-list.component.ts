import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  imports: [RecipeItemComponent],
  standalone: true,
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'decription','./assets/food.jpg'),
    new Recipe('Recipe 2', 'decription','./assets/food.jpg'),
    new Recipe('Recipe 3', 'decription','./assets/food.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
