import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../Service/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name='hello world'
  accno='password please!!!'
 
  
 
 LoginForm=this.fb.group({

    
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z 0-9]*')]],
    acc:['',[Validators.required,Validators.pattern('[0-9]*')]]

  })
 

  constructor(private router:Router,private ds:DatabaseService,private fb:FormBuilder) { 
    
  }

  ngOnInit(): void {
  }

  // acntTake(event:any){
  //   this.acc=event.target.value
  //   console.log(this.acc);
    
  // }

  // paswdTake(event:any){
  //   this.pwd=event.target.value
  //   console.log(this.pwd);
    
  // }


  // 
  
  login(){
    var acc=this.LoginForm.value.acc
    var pwd=this.LoginForm.value.pwd

    let database=this.ds.database
    console.log(database);
    

   let result=this.ds.login(acc,pwd)
   if(this.LoginForm.valid){

    if(result){
      alert('login success')
      this.router.navigateByUrl('dashboard')
    }}
    else{
      alert('invalid form')
    }

  }

}


