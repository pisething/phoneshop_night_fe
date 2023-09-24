import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray} from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm!: FormGroup;

  roleNames = ["Sale","Account"];

  constructor(private fb: FormBuilder) { }

  get roles(){
    return this.userForm.get("roles") as FormArray;
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
      roles: this.fb.array([]),
    });

    for(let i of this.roleNames){
      this.roles.push(this.fb.control(''));
    }

  }

  saveUser(){
    let myUser = new User(this.userForm, this.roleNames);
  }

}
