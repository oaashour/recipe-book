import { Ingredient } from './ingredient.model';
export interface Recipe {
    id?: number;
    name: string;
    description: string;
    ingredients: Ingredient[];
}
