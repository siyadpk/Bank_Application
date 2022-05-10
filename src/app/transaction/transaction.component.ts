import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../Service/database.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  acc:any
  transaction:any
  

  constructor(private ds:DatabaseService) { 
    
    this.acc=JSON.parse(localStorage.getItem('currentaccno')||'')
    this.ds.Transaction(this.acc)
    .subscribe((result:any)=>{
      if(result){

      this.transaction=result.transaction

   } },
   (result)=>{
     alert(result.error.message)
   }
   )

    
    
    console.log(this.transaction);
    

  }

  ngOnInit(): void {
  }

}
