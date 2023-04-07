import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ExercisesPageComponent} from "./pages/exercises-page/exercises-page.component";
import {ProductsPageComponent} from "./pages/products-page/products-page.component";
import {AboutUsPageComponent} from "./pages/about-us-page/about-us-page.component";
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {CoachesPageComponent} from "./pages/coaches-page/coaches-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'exercises', component: ExercisesPageComponent},
  {path: 'products', component: ProductsPageComponent},
  {path: 'about-us', component: AboutUsPageComponent},
  {path: 'products/:id', component: ProductPageComponent},
  {path: 'coaches', component: CoachesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
