import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[]=[
    {id: 1,nombre: 'Andrés',apellido: 'Guzmán',email: 'profesor@bolsadeideas.com',createAt: '2017-12-11'},
    {id: 2,nombre: 'Miguel',apellido: 'Hernandez',email: 'estudiante@bolsadeideas.com',createAt: '2018-02-10'},
    {id: 3,nombre: 'Richard',apellido: 'Helm',email: 'alumno@bolsadeideas.com',createAt: '2020-07-04'},
    {id: 5,nombre: 'Ralph',apellido: 'Johnson',email: 'ralph.johnson@gmail.com',createAt: '2017-12-11'},
    {id: 1,nombre: 'Magma',apellido: 'Lee',email: 'magma.lee@outlook.com',createAt: '2015-08-12'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
