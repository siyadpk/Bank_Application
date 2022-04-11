import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {


  database:any = {
    1000:{acc:1000,usname:'siya',passwd:123,bal:1000},
    1001:{acc:1001,usname:'zia',passwd:113,bal:1000},
    1002:{acc:1002,usname:'ziyad',passwd:223,bal:1000}
  }

  constructor() { }

   Register(acc:any,uname:any,passwd:any){

    let db=this.database

      if(acc in db){
        return false
      }
      else{
        db[acc]={
          acc,
          uname,
          passwd,
          bal:0
        }
        return true
      }

   }

   login(acc:any,pwd:any){
   

    let database=this.database
    console.log(database);
    

    if(acc in database){

      if(pwd == database[acc]['passwd']){
        return true
      }
      else{
        alert("incorrect password")
        return false
      }

    }
    else{
      alert("user doesnot exist")
      return false
    }

  }

  deposit(acc:any,pwd:any,amt:any){

    let amount=parseInt(amt)

    let database=this.database
    if(acc in database){

      if(pwd == database[acc]['passwd']){
        database[acc]['bal']+=amount
        return database[acc]['bal']

      }
      else{
        alert('incorrect password')
        return false

      }
    }
    else{
      alert('user doesnt exist')
      return false
    }

  }

  withdraw(acc:any,pwd:any,amt:any){

    let amount=parseInt(amt)

    let database=this.database
    if(acc in database){

      if(pwd == database[acc]['passwd']){

        if(database[acc]['bal']>amt){
          database[acc]['bal']-=amount
        return database[acc]['bal']

        }else{
          alert("insufficient balanace")
          return false
        }
        

      }
      else{
        alert('incorrect password')
        return false

      }
    }
    else{
      alert('user doesnt exist')
      return false
    }

  }






}
