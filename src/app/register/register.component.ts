import { Component, OnInit } from '@angular/core';
import{ User } from '../models/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user= new User();
  constructor(private httpClient:HttpClient, private userService:UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form!=null){
      form.reset();
      this.user={
        Username:'',
        Password:'',
        Email:'',
        FirstName:'',
        LastName:''
      }
    }
      
  }
  onSubmit(form:NgForm){
    ///console.log(form.value);
    if(form.value!=null){
      
      this.userService.registerUser(form.value).subscribe((data:any)=>{
        console.log(data);
        if(data=='2'){
          this.resetForm(form);
          this.toastr.success('User successfully registered! Please activate your account by following the link in your email');
        } else if(data=='1') {
          this.toastr.warning('Email exits!');
        } else {
          this.toastr.error('Try again later!');
        }
      });
    }
    
  }

}
