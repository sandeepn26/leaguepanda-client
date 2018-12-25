import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../ui-elements/users/users.service';
import { User } from '../../models';

declare const $: any;
declare const jquery: any;
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public userForm: FormGroup;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
	  this.userForm = new FormGroup({
        displayName: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
		email: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
		lastName: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
		phone: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
		password: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
		confirmpassword: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)])
        
    });
  }
  
  register(user: User) {
	  console.log(user);
	this.userService.register(user);
  }

}
