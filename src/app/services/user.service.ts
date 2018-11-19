import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { UserLogin } from '../models/userLogin.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  rootUlr='http://bangerzarmy.coregensolution.com/admin/wp-admin/admin-ajax.php?action=';
  constructor(private http : HttpClient) {}
  registerUser(user : User){
    const body : User={
      FirstName:user.FirstName,
      LastName:user.LastName,
      Username:user.Username,
      Password:user.Password,
      Email:user.Email
    }
    //console.log(body);
    //return this.http.get(this.rootUlr+'register&UserName='+user.Username+'&FirstName='+user.FirstName+'&LastName='+user.LastName+'&Password='+user.Password+'&Email='+user.Email);
    return this.http.post(this.rootUlr+'register',body);
  }

  loginUser(UserLogin : UserLogin){
    const body : UserLogin={
      Username:UserLogin.Username,
      Password:UserLogin.Password
    }
    //console.log(body);
    //return this.http.get(this.rootUlr+'register&UserName='+user.Username+'&FirstName='+user.FirstName+'&LastName='+user.LastName+'&Password='+user.Password+'&Email='+user.Email);
    return this.http.post(this.rootUlr+'login',body);
  }
  
  
}
