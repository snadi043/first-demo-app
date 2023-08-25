import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from 'src/services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igSubscription: Subscription;

  constructor(private slService: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.igSubscription = this.slService.ingredientsChanged.subscribe(
      (ingredient: Ingredient[]) => {
        this.ingredients = ingredient;
      }
    )
  }
  ngOnDestroy(): void {
      this.igSubscription.unsubscribe()
  }

}
