import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {ExercisesPageComponent} from './pages/exercises-page/exercises-page.component';
import {ProductsPageComponent} from './pages/products-page/products-page.component';
import {AboutUsPageComponent} from './pages/about-us-page/about-us-page.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {HomeInfoComponent} from './pages/home-page/home-info/home-info.component';
import {HomeLocationComponent} from './pages/home-page/home-location/home-location.component';
import {HomeHeroComponent} from './pages/home-page/home-hero/home-hero.component';
import {ButtonComponent} from './shared/components/button/button.component';
import {MenuComponent} from './shared/components/menu/menu.component';
import {ClickOutsideDirective} from './shared/directives/click-outside.directive';

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
    MenuComponent,
    ClickOutsideDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
