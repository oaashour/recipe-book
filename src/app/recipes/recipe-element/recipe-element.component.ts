import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from './../../shared/recipe.model';

@Component({
  selector: 'app-recipe-element',
  templateUrl: './recipe-element.component.html',
  styleUrls: ['./recipe-element.component.css']
})
export class RecipeElementComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
