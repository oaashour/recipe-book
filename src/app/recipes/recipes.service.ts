import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from '../shared/recipe.model';

@Injectable()
export class RecipesService {
    recipesChanged =  new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        {
            id: 1,
            name: 'Canadian Chile',
            description: 'Canadian Chile Recipe',
            ingredients: [
                { name: 'Egg', amount: 5},
                { name: 'Banana', amount: 3},
                { name: 'Onion', amount: 3}
            ]
        },
        {
            id: 2,
            name: 'Italian Pizza',
            description: 'Italian Pizza Recipe',
            ingredients: [
                { name: 'Egg', amount: 5},
                { name: 'Tomato', amount: 3},
                { name: 'Onion', amount: 3},
                { name: 'Salt', amount: 5},
                { name: 'Flower', amount: 5},
            ]
        },
    ];
    constructor(private shoppingListService: ShoppingListService ) { }

    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(id: number) {
        return this.recipes.find( r => r.id === id );
    }
    getRecipeIndex(id: number) {
        return this.recipes.findIndex( r => r.id === id );
    }
    addRecipe(recipe: Recipe) {
        recipe.id = Math.round(Math.random() * 1000);
        this.recipes.push(recipe);
    }
    updateRecipe(recipe: Recipe) {
        const index = this.getRecipeIndex(recipe.id);
        this.recipes[index] = recipe;
    }
    saveRecipe(recipe: Recipe) {
        if (recipe.id) {
            this.updateRecipe(recipe);
        } else {
            this.addRecipe(recipe);
        }
        this.fireChanged();
    }


    fireChanged() {
        this.recipesChanged.next(this.recipes);
    }

    addIngredientToShoppingList(id: number) {
        const ingredients = this.getRecipe(id).ingredients;
        this.shoppingListService.addIngredients(ingredients);
    }

}
