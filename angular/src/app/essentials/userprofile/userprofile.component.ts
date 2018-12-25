import { Component, OnInit } from '@angular/core';
import { UserService } from '../../ui-elements/users/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userProfile: any;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
      this.userService.getProfile('abc@abc.com').subscribe(data => {
      this.userProfile = data;
    });
 }

}
