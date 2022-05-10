import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const option={
  headers:new HttpHeaders()
}

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

  constructor(private http:HttpClient) { 

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



   Register(acc:any,uname:any,pwd:any){

   const data={
     acc,
     uname,
     pwd
   }
   return this.http.post('http://localhost:3000/register',data)
   }

   login(acc:any,pwd:any){

    const data={
      acc,
      pwd
    }
   
    return this.http.post('http://localhost:3000/login',data)
   
    

  }

  deposit(acc:any,pwd:any,amt:any){

    const data={
      amt,
      acc,
      pwd,
    
    }
    
    return this.http.post('http://localhost:3000/deposit',data,this.getOptions())


  }
  

  //token to req-headers
  getOptions(){
    const token=JSON.parse(localStorage.getItem("token")||'')
    let headers=new HttpHeaders()
    if(token){
      headers=headers.append('x-access-token',token)
      option.headers=headers
    }
    console.log(option.headers);
    
    return option


  }

  withdraw(acc:any,pwd:any,amt:any){
    
    const data={
      amt,
      acc,
      pwd,
    
    }
    
    return this.http.post('http://localhost:3000/withdraw',data,this.getOptions())

    
        

  }

  Transaction(acc:any){
    const data={
    
      acc,
      
    }
    
    return this.http.post('http://localhost:3000/transaction',data,this.getOptions())
  }


logout(){
  
}

onDelete(acc:any){
 
  console.log(acc+"hoo");
  
  return this.http.delete('http://localhost:3000/delete/'+acc,this.getOptions())


}



}
