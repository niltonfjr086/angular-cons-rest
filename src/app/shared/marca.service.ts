import { Injectable } from '@angular/core';
import { Marca } from './marca.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class MarcaService extends GenericService<Marca>{

  cnt = 0;

  constructor(protected httpClient: HttpClient) {
    super(httpClient, new Marca());
  };

  postMarca(data: Marca): Observable<{}> {
    if (data.id == null) {
      data.id = undefined;
      return this.insert(data);
    } else {
      return this.update(data);
    }
  };

  sortById(list: Array<Marca>): Array<Marca> {

    let initTime = new Date().getMilliseconds();
    this.cnt = 0;

    let sortedList = list.sort((a, b) => {
      console.log(++this.cnt);
      if (a.id < b.id) return -1;
      // else return 1;
    });

    // let sortedList = this.bubbleSortById(list);
    // let sortedList = this.quickSortById(list);

    let endTime = new Date().getMilliseconds();
    console.log(endTime - initTime + " Millisecond(s)");
    console.log(this.cnt + " Iteration(s)");

    return sortedList;
  };

  private bubbleSortById(list) {
    for (let i = 1; i < list.length; i++) {
      for (let j = 0; j < list.length - i; j++) {
        console.log(++this.cnt);
        if (j + 1 <= list.length && list[j].id > list[j + 1].id) {
          let temp = list[j];
          list[j] = list[j + 1];
          list[j + 1] = temp;
        }
      }
    }
    return list;
  }

  private quickSortById(list) {
    if (list.length <= 1) {
      console.log(++this.cnt);
      return list;
    } else {
      let left = [];
      let right = [];
      let newArray = [];
      let pivot = list.pop();
      let length = list.length;
      for (let i = 0; i < length; i++) {
        console.log(++this.cnt);
        if (list[i].id <= pivot.id) {
          left.push(list[i]);
        } else {
          right.push(list[i]);
        }
      }
      return newArray.concat(this.quickSortById(left), pivot, this.quickSortById(right));
    }
  }

}