import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {DataModel} from './first.model';

@Injectable({
  providedIn: 'root'
})
export class FirstService {
  data: DataModel[] = [
    {name: 'Alex Smith', username: 'alex33', access: 'user'},
    {name: 'John Doe', username: 'john22', access: 'admin'},
    {name: 'Peter Pan', username: 'peter11', access: 'user'},
  ];

  constructor() {
  }

  getData(): Observable<DataModel[]> {
    return of(this.data);
  }
}
