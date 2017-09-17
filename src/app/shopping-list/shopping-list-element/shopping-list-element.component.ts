import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-element',
  templateUrl: './shopping-list-element.component.html',
  styleUrls: ['./shopping-list-element.component.css']
})
export class ShoppingListElementComponent implements OnInit {
  @Input() id: number;
  @Input() element: Ingredient;
  constructor(private router: Router) { }

  ngOnInit() {}

}
