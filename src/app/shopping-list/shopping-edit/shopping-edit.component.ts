import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from 'src/services/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;

ingredientAdded: Ingredient[] = [];

constructor(private slSerive: ShoppingService) { }

ngOnInit() {
}

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount =  this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slSerive.addIngredients(newIngredient);

  }

}
