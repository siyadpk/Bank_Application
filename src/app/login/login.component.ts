import { Component, OnInit } from '@angular/core';

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

  database:any = {
    1000:{usname:'siya',passwd:123,bal:1000},
    1001:{usname:'zia',passwd:113,bal:1000},
    1002:{usname:'ziyad',passwd:223,bal:1000}
  }

  constructor() { }

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
  
  login(a:any,p:any){
    var acc=a.value
    var pwd=p.value

    let database=this.database
    console.log(database);
    

    if(acc in database){

      if(pwd == database[acc]['passwd']){
        alert("login success")
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
