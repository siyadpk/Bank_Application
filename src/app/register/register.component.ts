import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../Service/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname=''
  pwd=''
  acc=''

  constructor(private ds:DatabaseService , private router:Router) { }

  ngOnInit(): void {
  }


  Register(){
    var acc=this.acc
    var uname=this.uname
    var pwd=this.pwd

    var Result=this.ds.Register(acc,uname,pwd)

    if(Result){
      alert('registration completed')
      this.router.navigateByUrl('')
    }
    else{
      alert('Existing user..please Login!!!')
    }
  }

}
