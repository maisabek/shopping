import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import {RecipeEditComponent} from './components/recipes/recipe-edit/recipe-edit.component'
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'recipe',component:RecipesComponent,children:[
   {path:'',component:RecipeStartComponent},
   {path:':id',component:RecipeDetailComponent},
   {path:'new',component:RecipeEditComponent},
   {path:':id/edit',component:RecipeEditComponent}
  ]
  },
  {path:'shopping',component:ShoppingListComponent}
]

// to transform this class from a normal typescript class into an angular module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
