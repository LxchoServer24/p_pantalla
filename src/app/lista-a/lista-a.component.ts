import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-a',
  templateUrl: './lista-a.component.html',
  styleUrls: ['./lista-a.component.scss']
})
export class ListaAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  

}
