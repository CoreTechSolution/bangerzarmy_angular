import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../models/userLogin.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin= new UserLogin();
  constructor(private httpClient:HttpClient, private userService:UserService, private toastr: ToastrService) { }

  ngOnInit() {
  }
  resetForm(form?:NgForm){
    if(form!=null){
      form.reset();
      this.userLogin={
        Username:'',
        Password:''
      }
    }
    
      
  }
  onSubmit(form:NgForm){
    ///console.log(form.value);
    if(form.value!=null){
      
      this.userService.loginUser(form.value).subscribe((data:any)=>{
        console.log(data);
        if(data=='0'){
          this.resetForm(form);
          this.toastr.success('User logged in!');
        } else if(data=='1') {
          this.toastr.error('Username or Password wrong!');
        } else if(data=='2') {
          this.toastr.error('No user found with this username!');
        } else if(data=='3') {
          this.toastr.warning('Please activate your account');
        } else {
          this.toastr.warning('No username found!');
        }
      });
    }
    
  }

}
