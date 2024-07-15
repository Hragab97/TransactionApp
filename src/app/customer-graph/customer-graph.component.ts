import { Component } from '@angular/core';
import {Chart,registerables} from 'node_modules/chart.js'
Chart.register(...registerables)
import { ApidataService } from '../apidata.service';
ApidataService

@Component({
  selector: 'app-customer-graph',
  templateUrl: './customer-graph.component.html',
  styleUrls: ['./customer-graph.component.css']
})
export class CustomerGraphComponent {

  users: any[] = [];
  transactions: any[] = [];
  labeldata: any[] = [];
  amountdata: any[] = [];
  datedata: any[] = [];


constructor(private apiDataService: ApidataService){
  
}

ngOnInit():void {
  this.apiDataService.getJsonData().subscribe((res: any)=>{
    // alert(JSON.stringify(res))
    console.log(res.customers)
    this.transactions = res.transactions
    this.users = res.customers;
    if (this.transactions !=null ) {
      for (let i = 0; i < this.transactions.length; i++) {
       //console.log(this.transactions[i])
       this.labeldata.push(this.transactions[i].name)
       this.amountdata.push(this.transactions[i].amount)
       this.datedata.push(this.transactions[i].date)   
      }
      this.RenderChart(this.labeldata,this.amountdata,this.datedata);
    }
    
  });
  
}

  RenderChart(labeldata:any,amountdata:any,datedata:any){
    const myChart = document.getElementById('myChart');
    const myChart2 = document.getElementById('myChart2');
    const myChart3 = document.getElementById('myChart3');

    new Chart("myChart", {
      type: 'bar',
      data: {
        labels: labeldata,
        datasets: [{
          label: 'Amount L.E',
          data: amountdata,
          borderWidth: 1,

        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    new Chart("myChart2", {
      type: 'doughnut',
      data: {
        labels: labeldata,
        datasets: [{
          label: 'Amount L.E',
          data: amountdata,
          borderWidth: 1,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    new Chart("myChart3", {
      type: 'bar',
      data: {
        labels: datedata,
        datasets: [{
          label: 'Amount L.E',
          data: amountdata,
          borderWidth: 1,
          backgroundColor:'#ff6384',

        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
  }
}
