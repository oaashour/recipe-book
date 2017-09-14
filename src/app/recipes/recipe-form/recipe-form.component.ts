import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Ingredient } from './../../shared/ingredient.model';
import { Recipe } from './../../shared/recipe.model';
import { RecipesService } from './../recipes.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  recipeForm: FormGroup;
  recipeID: number;

  constructor(private recipesService: RecipesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.recipeForm = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      ingredients: new FormArray([])
    });

    this.route.params.subscribe(
      (params: Params) => {
        const recipe = this.recipesService.getRecipe(+params['id']);
        if (recipe) {
          this.recipeID = recipe.id;
          this.recipeForm.patchValue({
            name: recipe.name,
            description: recipe.description
          });

          recipe.ingredients.forEach(
            (ingredient: Ingredient) => {
              this.onAddIngredient(ingredient);
            });
        }
      }
    );
  }

  onSubmit() {
    // console.log(this.recipeForm.value);
    const recipe: Recipe = {
      id: this.recipeID,
      name: this.recipeForm.value.name,
      description: this.recipeForm.value.description,
      ingredients: []
    };
    (<Ingredient[]>this.recipeForm.value.ingredients)
      .forEach(
      (ingredient) => {
        recipe.ingredients.push(ingredient);
      }
      );
    this.recipesService.saveRecipe(recipe);
  }

  onAddIngredient(defaultValue?: Ingredient) {
    const ingredientFormGroup = new FormGroup({
      name: new FormControl(),
      amount: new FormControl()
    });
    ingredientFormGroup.setValue(defaultValue);
    (<FormArray>this.recipeForm.get('ingredients')).push(ingredientFormGroup);
  }

  onRemoveIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
