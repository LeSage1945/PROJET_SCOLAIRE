import { Component } from '@angular/core';

@Component({
  selector: 'app-agent-liste',
  templateUrl: './agent-liste.component.html',
  styleUrls: ['./agent-liste.component.scss']
})
export class AgentListeComponent {
  dataSources : any[]=[
    {
      Matricule:"gg",
      Nom: "AMONA",
      Prenom: "Fael",
      Sexe: "M",
      Adresse: "51 AV",
      DN: "15/03/2002",
      LN: "Brazzaville",
      Nationnalite: "Congolaise",
      Fonction: "Prof",

    },
    {
      Matricule:"hhh",
      Nom: "AMONA",
      Prenom: "Jessy",
      Sexe: "F",
      Adresse: "53 AV",
      DN: "15/03/1975",
      LN: "OYI",
      Nationnalite: "Congolaise",
      Fonction: "Docteur",

    }
  ]
}
