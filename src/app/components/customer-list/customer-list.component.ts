import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interface/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  listCustomer: Customer[] = []
  constructor(private _customers: CustomerService) { }

  ngOnInit(): void {
  }

  getCustomer(){
    this._customers.getListCustomer().subscribe(data => {
      console.log(data);
      this.listCustomer = data;
    }, error => {
      console.error(error);
    })
  }

  deleteCustomer(Id: any){
      this._customers.deleteCustomer(Id).subscribe(data => {
        this.getCustomer();
      }, error => {
        console.error(error);
      })
  }
}
