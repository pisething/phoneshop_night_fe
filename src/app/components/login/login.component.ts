import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;

  constructor(private userService: UserService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']      
    });
  }

  signIn(){
    let loginData = this.loginForm.value;
    console.log(loginData);
    this.userService.login(loginData).subscribe((res : HttpResponse<any>) =>{
      console.log("LogIn success");
      console.log("===============");
      console.log(res);
      console.log("===============");
      //console.log(res.headers.get("Authorization"));
      
    }, err =>{
      console.log(err);
    })
  }

}
