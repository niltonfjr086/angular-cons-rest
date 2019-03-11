import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../shared/marca.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss']
})
export class MarcasComponent implements OnInit {

  constructor(private marcaService: MarcaService) { }

  ngOnInit() {
  }

}