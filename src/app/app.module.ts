import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EleveComponent } from './eleve/eleve.component';
import { AgentComponent } from './agent/agent.component';
import { FamilleComponent } from './eleve/famille/famille.component';
import { ActionEleveComponent } from './eleve/action-eleve/action-eleve.component';
import { ActionFamilleComponent } from './eleve/famille/action-famille/action-famille.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EleveComponent,
    AgentComponent,
    FamilleComponent,
    ActionEleveComponent,
    ActionFamilleComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
