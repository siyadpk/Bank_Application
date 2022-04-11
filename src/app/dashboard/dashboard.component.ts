import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../Service/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   acc=''
   amt=''
   pwd=''

   acc1=''
   pwd1=''
   amt1=''

  constructor( private ds:DatabaseService) { }

  ngOnInit(): void {
  }
  deposit(){
    var acc=this.acc
    var amt=this.amt
    var pwd=this.pwd

    const result=this.ds.deposit(acc,pwd,amt)
    if(result){
      alert(`amount ${amt} is deposited and your new balance is ${result}`)
    }



  }
  withdraw(){
    
    var acc=this.acc1
    var amt=this.amt1
    var pwd=this.pwd1

    const result=this.ds.withdraw(acc,pwd,amt)
    if(result){
      alert(`amount ${amt} is deposited and your new balance is ${result}`)
    }

}
}
