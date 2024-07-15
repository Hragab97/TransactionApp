import { Component } from '@angular/core';
import { ApidataService } from '../apidata.service';
ApidataService


@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent {
  title = 'Customer-Transaction-App';
  searchtext: string ='';
  users: any[] = [];
  transactions: any[] = [];

  constructor(private apiDataService: ApidataService){
        this.apiDataService.getJsonData().subscribe((res: any)=>{
          // alert(JSON.stringify(res))
          console.log(res.customers)
          this.transactions = res.transactions
          this.users = res.customers;
        });


  }
}
