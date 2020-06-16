import { IngredientService } from './../ingredient.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  selectingredient:Ingredient;
  subscription: Subscription;

  constructor(private ingredientService:IngredientService) { }

  ngOnInit(): void {
    
    this.selectingredient=this.ingredientService.sele;
    console.log(this.selectingredient);




//     this.subscription = this.ingredientService.selectedIngredient.subscribe((Ingredient:Ingredient)=>{
//   this.selectingredient  = Ingredient;
//   console.log(this.selectingredient);
// })
  }

//   ngOnDestroy() {
//     // unsubscribe to ensure no memory leaks
//     this.subscription.unsubscribe();
// }

}
