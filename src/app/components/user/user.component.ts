import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm!: FormGroup;
  isSubmitted = false;

  roleNames = ["Sale","Account"];

  constructor(private fb: FormBuilder,
     private userService: UserService) { }

  get roles(){
    return this.userForm.get("roles") as FormArray;
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
      roles: this.fb.array([])
    });

    for(let i of this.roleNames){
      this.roles.push(this.fb.control(''));
    }

  }

  private getUserData(){
    let data = this.userForm.value;

    let selectedRoles = [];

    for(let i =0; i<data.roles.length; i++){
      if(data.roles[i]){
          selectedRoles.push(this.roleNames[i])
      }
    }
    data.roles = selectedRoles;
    //console.log(data);
    return data;
  }

  saveUser(){
    this.isSubmitted = true;
    let data = this.getUserData();
    // call api
    this.userService.saveUser(data).subscribe(() =>{
      console.log("User saved");
    }, err =>{
      console.log("Error");
      console.log(err);
    })
  }

}
