import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {


  database:any = {
    1000:{acc:1000,usname:'siya',passwd:123,bal:1000,transaction:[]},
    1001:{acc:1001,usname:'zia',passwd:113,bal:1000,transaction:[]},
    1002:{acc:1002,usname:'ziyad',passwd:223,bal:1000,transaction:[]}
  }
  currentuser=''
  currentaccno:any

  constructor() { 

    this.getFromLocal()
  }

  saveToLocal(){
    localStorage.setItem('database',JSON.stringify(this.database))
    localStorage.setItem('currentuser',JSON.stringify(this.currentuser))
    localStorage.setItem('currentaccno',JSON.stringify(this.currentaccno))
  }


  getFromLocal(){
    if('database' in localStorage){
     this.database=JSON.parse(localStorage.getItem('database')|| '')
    }
    if('currentuser' in localStorage){
      this.currentuser=JSON.parse(localStorage.getItem('currentuser')|| '')
     }
     if('currentaccno' in localStorage){
      this.currentaccno=JSON.parse(localStorage.getItem('currentaccno')|| '')
     }
  }



   Register(acc:any,usname:any,passwd:any){

    let db=this.database

      if(acc in db){
        return false
      }
      else{
        db[acc]={
          acc,
          usname,
          passwd,
          bal:0,
          transaction:[]
        }
        this.saveToLocal()
        return true
      }

   }

   login(acc:any,pwd:any){
   

    let database=this.database
    console.log(database);
    

    if(acc in database){

      if(pwd == database[acc]['passwd']){
        this.currentuser=database[acc]['usname']
        this.currentaccno=acc
        this.saveToLocal()
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
        database[acc]['transaction'].push({
          type:'CREDIT',
          amount:amount

        })
        console.log(database);
        this.saveToLocal()
        
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
          database[acc]['transaction'].push({
            type:'DEBIT',
            amount:amount
  
          })
          console.log(database);
          this.saveToLocal()
          
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

  Transaction(acno:any){
    return this.database[acno].transaction

  }


logout(){
  
}



}
