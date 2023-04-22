import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroComponent } from './pages/home-page/home-hero/home-hero.component';
import { HomeInfoComponent } from './pages/home-page/home-info/home-info.component';
import { HomeLocationComponent } from './pages/home-page/home-location/home-location.component';
import { ExercisesPageComponent } from './pages/exercises-page/exercises-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { BuyModalComponent } from './shared/components/modals/buy-modal/buy-modal.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { ClickOutsideDirective } from './shared/directives/click-outside.directive';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { CoachesPageComponent } from './pages/coaches-page/coaches-page.component';
import { CoachSchedulePipe } from './shared/pipes/coach-schedule.pipe';
import { CoachModalComponent } from './shared/components/modals/coach-modal/coach-modal.component';

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
    CoachModalComponent
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
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
