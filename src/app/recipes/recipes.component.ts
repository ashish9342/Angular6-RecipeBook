import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { Recipe } from './recipe.model';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  standalone: true,
  imports: [RecipeDetailComponent, RecipeListComponent, NgIf]
})
export class RecipesComponent implements OnInit {
  selectedRecipe : Recipe;

  constructor() { }

  ngOnInit() {
  }

}
