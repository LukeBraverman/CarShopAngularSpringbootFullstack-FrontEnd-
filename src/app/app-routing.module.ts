import {RouterModule, Routes} from "@angular/router";
import {ShopLandingpageComponent} from "./shop-landingpage/shop-landingpage.component";
import {NgModule} from "@angular/core";
import {PricingComponent} from "./pricing/pricing.component";


const routes: Routes = [
  {
    path: '',
    component: ShopLandingpageComponent
  },
  {path: 'home', component: ShopLandingpageComponent},
  {path: 'pricing', component: PricingComponent},
  {
    path: '**',
    redirectTo: '/'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
