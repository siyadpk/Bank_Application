import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../Service/database.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  acno:any
  transaction:any
  

  constructor(private ds:DatabaseService) { 
    
    this.acno=this.ds.currentaccno
    this.transaction=this.ds.Transaction(this.acno)

    
    
    console.log(this.transaction);
    

  }

  ngOnInit(): void {
  }

}
