import { Component, OnInit } from '@angular/core';
import { MarcaService } from 'src/app/shared/marca.service';
import { Marca } from 'src/app/shared/marca.model';

@Component({
  selector: 'app-marca-list',
  templateUrl: './marca-list.component.html',
  styleUrls: ['./marca-list.component.scss']
})
export class MarcaListComponent implements OnInit {

  constructor(private marcaService: MarcaService) {
    this.getList();
  }

  ngOnInit() {
  }

  getList() {
    this.marcaService.findAll().subscribe(res => {
      this.marcaService.manipulatedList = this.marcaService.sortById(<Array<Marca>>res);
    });
  }

  loadItem(id: number) {
    this.marcaService.findById(id).subscribe(res => {
      this.marcaService.entity = <Marca>res;
    });
  }

  deleteItem(id: number) {
    this.marcaService.delete(id).subscribe(res => {
      this.getList();
    });
  }

}
