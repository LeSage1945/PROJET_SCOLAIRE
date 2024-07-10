import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EleveComponent } from './eleve/eleve.component';
import { ActionEleveComponent } from './eleve/action-eleve/action-eleve.component';
import { AgentComponent } from './agent/agent.component';
import { ActionFamilleComponent } from './eleve/famille/action-famille/action-famille.component';

const routes: Routes = [
  {path: 'eleve', component: EleveComponent},
  {path: 'agent', component: AgentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
