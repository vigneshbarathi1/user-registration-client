import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  constructor(private http:HttpClient) { }


  public doRegistration(user: User){
    return this.http.post("http://localhost:8080/register",user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get("http://localhost:8080/getAllUsers");
  }

  public getUserByEmail(email: string){
    return this.http.get("http://localhost:8080//findUser/"+email);
  }

  public deleteUser(id: string){
    return this.http.delete("http://localhost:8080/cancel/"+id);
  }
}
