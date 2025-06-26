import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LandingRoutingModule } from "./landing.routing.module";
import { MaterialModule } from "../material.module";



@NgModule({
  
    imports: [
      CommonModule,
      RouterModule,
      MaterialModule,
        LandingRoutingModule
        // Importa las rutas del módulo
    ]// Componente principal del módulo
  })
  export class LandingModule { }