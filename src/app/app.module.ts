import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DropDownDirective } from './shared/dropDown.directive';
import { RecipesService } from './recipes/recipes.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeFormComponent } from './recipes/recipe-form/recipe-form.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeElementComponent } from './recipes/recipe-element/recipe-element.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListElementComponent } from './shopping-list/shopping-list-element/shopping-list-element.component';
import { ShoppingListFormComponent } from './shopping-list/shopping-list-form/shopping-list-form.component';


const AppRoutes: Route[] = [
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: '', redirectTo: 'create', pathMatch: 'full' },
      { path: 'create', component: RecipeFormComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeFormComponent }
    ]
  },
  {
    path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipesComponent,
    RecipeFormComponent,
    RecipeDetailComponent,
    RecipeElementComponent,
    DropDownDirective,
    ShoppingListComponent,
    ShoppingListElementComponent,
    ShoppingListFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [RecipesService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
