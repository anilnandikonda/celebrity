import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CELEBRITYYEAR,YEAR, FILMSDATA } from './mock-models';
import { HttpErrorResponse } from '@angular/common/http';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';


@Component({
  selector: 'app-celebrity-data',
  templateUrl: './celebrity-data.component.html'
})



export class CelebrityDataComponent {
  public celebritiesyears;
  celebritiesperyears = CELEBRITYYEAR;
  public celebyear:number[] = [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
  years=YEAR;
  filmsData=FILMSDATA;
  /*constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get(baseUrl + 'api/CelebrityData/GetYears').subscribe(result => {
      this.celebritiesyears = result;
    }, error => console.error(error));
  }*/
  filterCelebrities(filterVal: any) {

    if (filterVal == "0") {

      this.celebritiesperyears = CELEBRITYYEAR;
    }

    else {
      this.celebritiesperyears = CELEBRITYYEAR;
      this.celebritiesperyears = this.celebritiesperyears.filter((item) => item.year == filterVal);
    }
  }

 
  public pieChartLabels:string[] =  ['2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019'];
  public pieChartData:number[] =  [500,300,200,220,300,350,400,500,600,700,400];
 // public pieChartLabels:number[] =[29,21,211,212,213,214,215,216,217,218,219,220];
  public pieChartType:string = 'doughnut';
  public pieChartLegend = true;
  public pieChartOption: any = {
    legend: {
      position: 'bottom',
      labels: {
        fontSize: 10,
        usePointStyle: true
      }
    }
  }
  public pieChartPlugins = [{
    afterLayout: function (chart) {
      chart.legend.legendItems.forEach(
        (label) => {
          let value = chart.data.datasets[0].data[label.index];

          label.text += ' ' + value;
          return label;
        }
      )
    }
  }];
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

}
 
interface celebyear {
  name: number;
}
interface filmsData {
  year: string;
  movieCount: number;
}
interface celebritiesyears {
  name: number;
}
