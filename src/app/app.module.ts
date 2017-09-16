import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipesService } from './recipes/recipes.service';
import { DropDownDirective } from './shared/dropDown.directive';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeFormComponent } from './recipes/recipe-form/recipe-form.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeElementComponent } from './recipes/recipe-element/recipe-element.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const AppRoutes: Route[] = [
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: 'create', component: RecipeFormComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeFormComponent }
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent }
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
    ShoppingListComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
