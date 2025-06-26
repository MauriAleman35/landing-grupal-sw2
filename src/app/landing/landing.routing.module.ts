import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainLayoutLandingComponent } from "../layout/main-layout-landing/main-layout-landing.component";
import { LandingHomeComponent } from "./pages/landing-home/landing-home.component";
import { LandingPlansComponent } from "./pages/landing-plans/landing-plans.component";
import { LandingFeaturesComponent } from "./pages/landing-features/landing-features.component";
import { LandingContactComponent } from "./pages/landing-contact/landing-contact.component";
import { LandingTermsConditionsComponent } from "./pages/landing-terms-conditions/landing-terms-conditions.component";
import { LandingPrivacyPolicyComponent } from "./pages/landing-privacy-policy/landing-privacy-policy.component";




const routes: Routes = [
  // Rutas con layout principal
  {
    path: '', 
    component: MainLayoutLandingComponent,
    children: [
      {path: '',component:LandingHomeComponent },
    {path:'planes',component:LandingPlansComponent},
    {path:'funciones',component:LandingFeaturesComponent},
      {path:'contacto',component:LandingContactComponent},{
        path:'terminos',component:LandingTermsConditionsComponent
      },{path:'privacidad',component:LandingPrivacyPolicyComponent}
    ]
  },



  // // Opcional: redireccionar cualquier ruta inválida
  // { path: '**', redirectTo: '', pathMatch: 'full' }
];

    
  @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
   })
    export class LandingRoutingModule {}