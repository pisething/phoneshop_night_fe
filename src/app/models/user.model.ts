import {FormGroup} from '@angular/forms';
export class User {
    username!: string;
    email!: string;
    password!: string;
    roles: string[] =[];

    public constructor(form: FormGroup, roleNames: string[]) {
        this.username = form.get("username")?.value;
        this.email = form.get("email")?.value;
        this.password = form.get("password")?.value;
        let rolesData = form.get("roles")?.value;
        for(let i =0; i<rolesData.length; i++){
            if(rolesData[i]){
                this.roles.push(roleNames[i])
            }
        }
    }
  }
  