import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EleveComponent } from './eleve/eleve.component';
import { ActionEleveComponent } from './eleve/action-eleve/action-eleve.component';
import { AgentComponent } from './agent/agent.component';
import { ActionFamilleComponent } from './eleve/famille/action-famille/action-famille.component';
import { FamilleComponent } from './eleve/famille/famille.component';
import { AgentListeComponent } from './agent-liste/agent-liste.component';
import { AgentFormComponent } from './agent-form/agent-form.component';

const routes: Routes = [
  {path: 'eleve', component: EleveComponent},
  {path: 'eleve/form', component: ActionEleveComponent},
  {path: 'famille', component: FamilleComponent},
  {path: 'famille/form', component: ActionFamilleComponent},
  {path: 'agent', component: AgentComponent},
  {path: 'agentForm', component: AgentFormComponent},
  {path: 'agentListe', component: AgentListeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
