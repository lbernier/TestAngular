import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  RouterModule,
  Routes,
  ActivatedRoute,
  ActivatedRouteSnapshot,
} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DndModule } from 'ngx-drag-drop';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { EditAppComponent } from './edit-app/edit-app.component';
import { GenerateurFormulaireChampsComponent } from './generateur-formulaire-champs/generateur-formulaire-champs.component';
import { GenerateurFormulaireApercuComponent } from './generateur-formulaire-apercu/generateur-formulaire-apercu.component';
import { GenerateurFormulaireComponent } from './generateur-formulaire/generateur-formulaire.component';

const appRoutes: Routes = [
  { path: '', component: GenerateurFormulaireComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EditAppComponent,
    GenerateurFormulaireChampsComponent,
    GenerateurFormulaireApercuComponent,
    GenerateurFormulaireComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    SweetAlert2Module.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DndModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
