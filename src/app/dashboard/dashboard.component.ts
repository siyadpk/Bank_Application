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
  currentacc:any

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


  Logindate:any

  constructor( private ds:DatabaseService,private fb:FormBuilder , private router:Router) { 
    this.username=JSON.parse(localStorage.getItem('currentuser')||'')
    this.Logindate=new Date()
    
  }

  ngOnInit(): void {
    // if('currentuser' in localStorage){
   
    // }else{
    //   alert('please Login!!!')
    //   this.router.navigateByUrl('')
    // }
  }
  deposit(){
    var acc=this.DepositForm.value.acc
    var amt=this.DepositForm.value.amt
    var pwd=this.DepositForm.value.pwd


    if(this.DepositForm.valid){

    this.ds.deposit(acc,pwd,amt)
    .subscribe((result:any)=>{
      
        if(result){
          alert(result.message)
        }   
    },
    (result)=>{
      alert(result.error.message)
    })
  }
    else{
      alert('invalid Form')
    }




  }
  withdraw(){
    
    var acc=this.WithdrawForm.value.acc1
    var amt=this.WithdrawForm.value.amt1
    var pwd=this.WithdrawForm.value.pwd1

    if(this.WithdrawForm.valid){

      this.ds.withdraw(acc,pwd,amt)
      .subscribe((result:any)=>{
        
          if(result){
            alert(result.message)
          }   
      },
      (result)=>{
        alert(result.error.message)
      })
    }
      else{
        alert('invalid Form')
      }

}

deleteAccnt(){

  this.currentacc=JSON.parse(localStorage.getItem('currentaccno')||"")
  console.log(this.currentacc);
  
}


  logout(){
    alert('Are you sure?')
    localStorage.removeItem('currentuser')
    localStorage.removeItem('currentaccno')
    this.router.navigateByUrl('')
  }


  onCancel(){
    this.currentacc=""
  }
  onDelete(event:any){
    console.log(event+'he');
    
    this.ds.onDelete(event)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.router.navigateByUrl('')
      }

    },
    (result:any)=>{
      alert(result.error.message)

    })
  }
}
