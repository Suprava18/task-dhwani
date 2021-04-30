import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ChartType, ChartOptions, Chart, registerables } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
Chart.register(...registerables);


@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  url = 'https://api.nationalize.io?name=michael';
  dataList;
  page2 = true;
  pieDataSet: any = [];
  public pieChartLabels = [];
  public pieChartData = [];
  public pieChartType = 'pie';

  constructor(private service: DataService) {

  }

  pieChartOptions = {
    responsive: true
  };

  // --CHART COLOR.
  pieChartColor: any = [
    {
        backgroundColor: ['rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(139, 136, 136, 0.9)',
        ]
    }
  ];


  ngOnInit(): void {
    let data = [];
    // tslint:disable-next-line: deprecation
    let sub = this.service.getData(this.url).subscribe(resp => {
          this.dataList = resp;
          this.dataList.country.forEach(element => {
            this.pieChartData.push(element.probability);

        });

          this.dataList.country.forEach(element => {
            this.pieChartLabels.push(element.country_id);

        });

          console.log(this.pieChartData, this.pieChartLabels);

      },
      error=>{
        sub.unsubscribe();
      }
    );
  }

  // tslint:disable-next-line: typedef
  nextPage(){
    this.page2 = false;
  }

  // tslint:disable-next-line: typedef
  onChartClick(event) {
    console.log(event);
  }


}
