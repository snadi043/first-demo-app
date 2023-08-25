import { Subject } from "rxjs";
import { Recipe } from "src/app/recipes/recipe.model";
import { Ingredient } from "src/app/shared/ingredient.model";

export class RecipeService{

  selectedRecipe = new Subject<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Bread', 4)
      ]),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Bread', 4)
      ])
   ];

  getRecipes(){
    return this.recipes.slice();
  }
}
