import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  RegisterForm=this.fb.group({

    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z 0-9]*')]],
    acc:['',[Validators.required,Validators.pattern('[0-9]*')]]

  })

  constructor(private ds:DatabaseService , private router:Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  Register(){
    var acc=this.RegisterForm.value.acc
    var uname=this.RegisterForm.value.uname
    var pwd=this.RegisterForm.value.pwd

    if(this.RegisterForm.valid){
    var Result=this.ds.Register(acc,uname,pwd)

    if(Result){
      alert('registration completed')
      this.router.navigateByUrl('')
    }
    else{
      alert('Existing user..please Login!!!')
    }}
    else{
      alert('invalid form')
    }
  }

}
