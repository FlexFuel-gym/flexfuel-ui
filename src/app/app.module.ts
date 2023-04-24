/** LIBS */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/** PAGES */
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroComponent } from './pages/home-page/home-hero/home-hero.component';
import { HomeInfoComponent } from './pages/home-page/home-info/home-info.component';
import { HomeLocationComponent } from './pages/home-page/home-location/home-location.component';
import { ExercisesPageComponent } from './pages/exercises-page/exercises-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CoachesPageComponent } from './pages/coaches-page/coaches-page.component';
import { PlanExercisesPageComponent } from './pages/plan-exercises-page/plan-exercises-page.component';

/** COMPONENTS */
import { FooterComponent } from './shared/components/footer/footer.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { PlanLineComponent } from './shared/components/plan-line/plan-line.component';
import { BuyModalComponent } from './shared/components/modals/buy-modal/buy-modal.component';
import { CoachModalComponent } from './shared/components/modals/coach-modal/coach-modal.component';
import { BuyPlanModalComponent } from './shared/components/modals/buy-plan-modal/buy-plan-modal.component';
import { PlanDetailsModalComponent } from './shared/components/modals/plan-details-modal/plan-details-modal.component';
import {
  ActivatePlanModalComponent
} from './shared/components/modals/activate-plan-modal/activate-plan-modal.component';

/** OTHER */
import { ClickOutsideDirective } from './shared/directives/click-outside.directive';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { CoachSchedulePipe } from './shared/pipes/coach-schedule.pipe';
import { PlanTrainingPageComponent } from './pages/plan-training-page/plan-training-page.component';
import { ExercisePipe } from './shared/pipes/exercise.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ExercisesPageComponent,
    ProductsPageComponent,
    AboutUsPageComponent,
    FooterComponent,
    HomeInfoComponent,
    HomeLocationComponent,
    HomeHeroComponent,
    ButtonComponent,
    ProductPageComponent,
    BuyModalComponent,
    MenuComponent,
    ClickOutsideDirective,
    LoaderComponent,
    CoachesPageComponent,
    CoachSchedulePipe,
    CoachModalComponent,
    BuyPlanModalComponent,
    ActivatePlanModalComponent,
    PlanDetailsModalComponent,
    PlanLineComponent,
    PlanExercisesPageComponent,
    PlanTrainingPageComponent,
    ExercisePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSmartModalModule.forRoot(),
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      backgroundOpacity: 1,
      backgroundStrokeWidth: 0,
      backgroundPadding: 5,
      radius: 175,
      space: -10,
      toFixed: 0,
      outerStrokeGradient: true,
      outerStrokeWidth: 10,
      outerStrokeColor: '#089CF5',
      outerStrokeGradientStopColor: '#089CF5',
      outerStrokeLinecap: 'inherit',
      innerStrokeColor: '#333333',
      innerStrokeWidth: 10,
      title: 'UI',
      titleFontSize: '69',
      titleColor: '#089CF5',
      subtitleFontSize: '30',
      animateTitle: false,
      animationDuration: 0,
      showSubtitle: false,
      showUnits: false,
      showBackground: false,
      clockwise: false,
      startFromZero: false,
      lazy: true
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
