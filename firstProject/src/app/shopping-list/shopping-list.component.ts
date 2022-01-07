import { Ingredient } from './../shared/ingedient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]=[
    new Ingredient('Potato', 5),
    new Ingredient('Rosemarie', 4)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
