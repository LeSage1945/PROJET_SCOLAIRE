import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.scss']
})
export class EleveComponent {
  displayedColumns: string[] = [ 'Matricule', 'Nom', 'Prenom', 'Sexe', 'DateDeNaissance', 'LieuDeNaissance', 'DateDeNaissance', 'Nationalite', 'Classe', 'ACTIONS'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ELEMENT_DATA: any[] = [
    {Matricule: 1, Nom: 'Hydrogen', Prenom: 'yannick', Sexe: 'H', DateDeNaissance: '03/12/2000', LieuDeNaissance: 'brazzaville', Nationalite: 'congolais', Classe: 'second'},
    {Matricule: 1, Nom: 'Hydrogen', Prenom: 'yannick', Sexe: 'H', DateDeNaissance: '03/12/2000', LieuDeNaissance: 'brazzaville', Nationalite: 'congolais', Classe: 'second'},
    {Matricule: 1, Nom: 'Hydrogen', Prenom: 'yannick', Sexe: 'H', DateDeNaissance: '03/12/2000', LieuDeNaissance: 'brazzaville', Nationalite: 'congolais', Classe: 'second'},
    {Matricule: 1, Nom: 'Hydrogen', Prenom: 'yannick', Sexe: 'H', DateDeNaissance: '03/12/2000', LieuDeNaissance: 'brazzaville', Nationalite: 'congolais', Classe: 'second'},
    {Matricule: 1, Nom: 'Hydrogen', Prenom: 'yannick', Sexe: 'H', DateDeNaissance: '03/12/2000', LieuDeNaissance: 'brazzaville', Nationalite: 'congolais', Classe: 'second'},
    {Matricule: 1, Nom: 'Hydrogen', Prenom: 'yannick', Sexe: 'H', DateDeNaissance: '03/12/2000', LieuDeNaissance: 'brazzaville', Nationalite: 'congolais', Classe: 'second'},
    {Matricule: 1, Nom: 'Hydrogen', Prenom: 'yannick', Sexe: 'H', DateDeNaissance: '03/12/2000', LieuDeNaissance: 'brazzaville', Nationalite: 'congolais', Classe: 'second'},
    {Matricule: 1, Nom: 'Hydrogen', Prenom: 'yannick', Sexe: 'H', DateDeNaissance: '03/12/2000', LieuDeNaissance: 'brazzaville', Nationalite: 'congolais', Classe: 'second'},
    {Matricule: 1, Nom: 'Hydrogen', Prenom: 'yannick', Sexe: 'H', DateDeNaissance: '03/12/2000', LieuDeNaissance: 'brazzaville', Nationalite: 'congolais', Classe: 'second'},
    {Matricule: 1, Nom: 'Hydrogen', Prenom: 'yannick', Sexe: 'H', DateDeNaissance: '03/12/2000', LieuDeNaissance: 'brazzaville', Nationalite: 'congolais', Classe: 'second'},
    {Matricule: 1, Nom: 'Hydrogen', Prenom: 'yannick', Sexe: 'H', DateDeNaissance: '03/12/2000', LieuDeNaissance: 'brazzaville', Nationalite: 'congolais', Classe: 'second'},
    {Matricule: 1, Nom: 'Hydrogen', Prenom: 'yannick', Sexe: 'H', DateDeNaissance: '03/12/2000', LieuDeNaissance: 'brazzaville', Nationalite: 'congolais', Classe: 'second'},
    {Matricule: 1, Nom: 'Hydrogen', Prenom: 'yannick', Sexe: 'H', DateDeNaissance: '03/12/2000', LieuDeNaissance: 'brazzaville', Nationalite: 'congolais', Classe: 'second'},

  ];
}
