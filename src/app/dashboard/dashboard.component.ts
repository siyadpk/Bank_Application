import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../Service/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  

  username=''

   DepositForm=this.fb.group({

    amt:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z 0-9]*')]],
    acc:['',[Validators.required,Validators.pattern('[0-9]*')]]

  })

  WithdrawForm=this.fb.group({

    amt1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pwd1:['',[Validators.required,Validators.pattern('[a-zA-Z 0-9]*')]],
    acc1:['',[Validators.required,Validators.pattern('[0-9]*')]]

  })



  constructor( private ds:DatabaseService,private fb:FormBuilder , private router:Router) { 
    this.username=this.ds.currentuser
    
  }

  ngOnInit(): void {
    if('currentuser' in localStorage){
   
    }else{
      alert('please Login!!!')
      this.router.navigateByUrl('')
    }
  }
  deposit(){
    var acc=this.DepositForm.value.acc
    var amt=this.DepositForm.value.amt
    var pwd=this.DepositForm.value.pwd

    const result=this.ds.deposit(acc,pwd,amt)
    if(this.DepositForm.valid){
    if(result){
      alert(`amount ${amt} is deposited and your new balance is ${result}`)
    }}
    else{
      alert('invalid Form')
    }



  }
  withdraw(){
    
    var acc=this.WithdrawForm.value.acc1
    var amt=this.WithdrawForm.value.amt1
    var pwd=this.WithdrawForm.value.pwd1

    const result=this.ds.withdraw(acc,pwd,amt)
    if(this.WithdrawForm.valid){
    if(result){

      alert(`amount ${amt} is deposited and your new balance is ${result}`)
    }}
    else{
      alert('invalid form')
    }

}


  logout(){
    localStorage.removeItem('currentuser')
    localStorage.removeItem('currentaccno')
    this.router.navigateByUrl('')
  }
}
