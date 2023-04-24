import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ExercisesPageComponent } from './pages/exercises-page/exercises-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CoachesPageComponent } from './pages/coaches-page/coaches-page.component';
import { PlanExercisesPageComponent } from './pages/plan-exercises-page/plan-exercises-page.component';

import { PlanBoughtGuard } from './core/guards/plan-bought.guard';
import { PlanTrainingPageComponent } from './pages/plan-training-page/plan-training-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'exercises',
    component: ExercisesPageComponent
  },
  {
    path: 'products',
    component: ProductsPageComponent
  },
  {
    path: 'about-us',
    component: AboutUsPageComponent
  },
  {
    path: 'products/:id',
    component: ProductPageComponent
  },
  {
    path: 'coaches',
    component: CoachesPageComponent
  },
  {
    path: 'plan/exercises',
    component: PlanExercisesPageComponent,
    canActivate: [PlanBoughtGuard]
  },
  {
    path: 'plan/training',
    component: PlanTrainingPageComponent,
    canActivate: [PlanBoughtGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
