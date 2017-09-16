import { Injectable } from '@angular/core';

import { Ingredient } from './../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
    private ingredients: Ingredient[];
    constructor() { }

    public getIngredients() {
        return this.ingredients.slice();
    }
}
