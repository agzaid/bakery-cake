import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  selectedIngredient = new Subject<Ingredient>();
  sele;

  ingredients: Ingredient[] = [
    new Ingredient('levander cup', '/assets/13.png', 
    'add in your food coloring, a couple drops of lavender oil, and fold in the honey to make your frosting just a touch sweeter.'
      , 'https://www.youtube.com/embed/lzOT1Jntz64'),
    new Ingredient('chocolate', '/assets/9.png','Chocolate Cupcakes. 1 1/2 cups all-purpose flour. 1 1/2 cups granulated sugar. 3/4 cup unsweetened cocoa powder. 1 1/2 teaspoons baking soda. 3/4 teaspoon baking powder. 3/4 teaspoon teaspoon salt. 2 large eggs. 3/4 cup buttermilk.'),
    new Ingredient('vanilia cup', '/assets/10.png',' Ingredients. 1 2/3 cup all-purpose flour 213g. 1 cup granulated sugar 200g. 1/4 tsp baking soda. 1 1/2 tsp baking powder. 1/4 tsp kosher salt. 3/4 cup unsalted butter 170g, melted. 3 egg whites room temperature. 1 tbsp vanilla extract 15mL.'),
    new Ingredient('Strawbery cup', '/assets/7.png', 'Cupcakes. 8–9 large strawberries* 1 large egg + 2 egg whites, room temperature and separated. 2 cups (250g) all-purpose flour* (spoon & leveled) 1/4 cup (30g) cornstarch* 2 and 1/2 teaspoons baking powder. 1/2 teaspoon salt. 3/4 cup (180g) unsalted butter, softened to room temperature. 1 and 1/2 cups (300g) granulated '),
    new Ingredient('Rainbow cup', '/assets/8.png',' Ingredients. 1 cup butter , softened. 2 1/3 cups sugar. 5 egg whites. 1 tablespoon vanilla. 3 cups flour. 4 teaspoons baking powder. 1/2 teaspoon salt. 1 1/2 cups milk , warmed for 30 sec in microwave to bring to room temp.')
  ]

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  selected(ingredient: Ingredient) {
     this.sele = ingredient;
  }

}
