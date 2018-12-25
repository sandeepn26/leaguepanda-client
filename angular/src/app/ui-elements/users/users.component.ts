import { Component, OnInit } from '@angular/core';
import { UserService } from './users.service';

declare const $: any;
declare const jquery: any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Array<any>;
  userProfile: any;

  constructor(private userService: UserService) { }

 ngOnInit() {
    this.userService.getAll().subscribe(data => {
      this.users = data;
    });
	this.userService.getProfile('abc@abc.com').subscribe(data => {
      this.userProfile = data;
    });
 }

}
