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

    
    

   
   if(this.LoginForm.valid){
    this.ds.login(acc,pwd)
    .subscribe((result:any)=>{
      if(result){
        localStorage.setItem('currentaccno',JSON.stringify(result.currentaccno))
        localStorage.setItem('currentuser',JSON.stringify(result.currentuser))
        localStorage.setItem('token',JSON.stringify(result.token))
        alert(result.message)
        this.router.navigateByUrl('dashboard')
      }

    },
    (result=>{
      alert(result.error.message)
    }))

  }
    else{
      alert('invalid form')
    }

  }

}


