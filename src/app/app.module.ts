import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from 'src/components/ShoppingList/shoppingList.component';
import { ShoppingListEditComponent } from 'src/components/ShoppingListEdit/shoppingListEdit.component';
import { RecipeListComponent } from 'src/components/RecipeList/recipeList.component';
import { RecipeItemComponent } from 'src/components/RecipeItem/recipeItem.component';
import { RecipeDetailComponent } from 'src/components/RecipeDetail/recipeDetail.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
