import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MarcaService } from 'src/app/shared/marca.service';
import { Marca } from 'src/app/shared/marca.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss']
})
export class MarcaComponent implements OnInit {

  constructor(private marcaService: MarcaService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.marcaService.postMarca(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'Registered');
      this.refreshList();
      this.resetForm(form);
    });
  }

  refreshList() {
    this.marcaService.findAll().subscribe(res => {
      this.marcaService.manipulatedList = this.marcaService.sortById(<Array<Marca>>res);
    })
  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.marcaService.entity = new Marca();
  }

}
