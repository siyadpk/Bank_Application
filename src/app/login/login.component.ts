import { Component, OnInit } from '@angular/core';
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
  acc=''
  pwd=''

 

  constructor(private router:Router,private ds:DatabaseService) { }

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
    var acc=this.acc
    var pwd=this.pwd

    let database=this.ds.database
    console.log(database);
    

    if(acc in database){

      if(pwd == database[acc]['passwd']){
        this.router.navigateByUrl('dashboard')
      }
      else{
        alert("incorrect password")
      }

    }
    else{
      alert("user doesnot exist")
    }
  }

}


