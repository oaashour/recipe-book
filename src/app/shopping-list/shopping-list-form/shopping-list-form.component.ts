import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list.service';

@Component({
  selector: 'app-shopping-list-form',
  templateUrl: './shopping-list-form.component.html',
  styleUrls: ['./shopping-list-form.component.css']
})
export class ShoppingListFormComponent implements OnInit {
  @ViewChild('form') form: NgForm;

  id: number = null;
  ingredient: Ingredient = {name: '', amount: null};


  constructor(private shoppingListService: ShoppingListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(
      (paramsMap: ParamMap) => {
        if (paramsMap.has('id')) {
          this.id = +paramsMap.get('id');
          this.ingredient = this.shoppingListService.getIngredient(this.id);
        }
      }
    );
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }
    if (this.id !== null) {
      this.shoppingListService.updateIngredient(this.id, this.ingredient);
    } else {
      this.shoppingListService.addIngredient(this.ingredient);
    }
    this.onCancelEdit();
  }

  onCancelEdit()  {
    this.id = null;
    this.ingredient = {name: null, amount: null};
    this.form.reset();
    this.router.navigate([], { relativeTo: this.route });
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.id);
    this.onCancelEdit();
  }

}
