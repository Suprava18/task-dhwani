import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { setUncaughtExceptionCaptureCallback } from 'node:process';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  url = 'https://api.nationalize.io?name=michael';
  dataList;
  page1 = true;
  constructor(private service: DataService) {
  }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    const sub = this.service.getData(this.url).subscribe(resp => {
        this.dataList = resp;
      },
      error => {
        sub.unsubscribe();
      }

    );
  }

  // tslint:disable-next-line: typedef
  nextPage(){
    this.page1 = false;
  }

}
