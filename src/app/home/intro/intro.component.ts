import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { IngredientService } from './../ingredient.service';
import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../ingredient';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  ingredients: Ingredient[];
  closeResult: string;
  @Input() ingredient:Ingredient;

  constructor(private ingredientService: IngredientService, private modalService: NgbModal,
     public dialog:MatDialog) { 
    
  }

  ngOnInit(): void {
    this.ingredients = this.ingredientService.getIngredients()
    console.log(this.ingredient)

  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openDialog(ingredient){
    this.ingredientService.selected(ingredient);

    
    const dialogRef = this.dialog.open(PopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      
    });
  }
  }


