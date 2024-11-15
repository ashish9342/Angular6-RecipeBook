import { bootstrapApplication } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HeaderComponent,
//     RecipesComponent,
//     RecipeListComponent,
//     ShoppingListComponent,
//     ShoppingEditComponent,
//     RecipeDetailComponent,
//     RecipeItemComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })

bootstrapApplication(AppComponent).catch((err) => console.error(err));

export class AppModule { }
