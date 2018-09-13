import {Component, OnInit} from '@angular/core';
import {FirstService} from './first.service';
import {DataModel} from './first.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  data: DataModel[];

  constructor(private service: FirstService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.service.getData().subscribe((data: DataModel[]) => {
      this.data = data;
    });
  }

}
