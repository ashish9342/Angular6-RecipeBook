import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';


@Component({
  selector: 'app-shopping-list',
  standalone: true,
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  imports: [ShoppingEditComponent, NgFor]
})
export class ShoppingListComponent implements OnInit {
  // ingredients = [];
  ingredients : Ingredient[] = [
  new Ingredient('Tomato', 5),
  new Ingredient('Onion', 4)
]
  constructor() { }

  ngOnInit() {
  }

}
