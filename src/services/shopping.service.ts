import { Ingredient } from "src/app/shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingService{
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
