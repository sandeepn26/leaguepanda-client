import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../ui-elements/users/users.service';

@Component({
  selector: 'app-loginv1',
  templateUrl: './loginv1.component.html',
  styleUrls: ['./loginv1.component.scss']
})
export class Loginv1Component implements OnInit {

  constructor(private router: Router,private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit1 = function(user){
    console.log(user);
    this.userService.login(user).subscribe(data => {
      //this.userProfile = data;
      console.log(data)
    });
      //this.router.navigate(['home']);
    }

    onSubmit = function(user){
      console.log(user);
      
      this.userService.doLoginPromise(user).then(
        response => {
          console.log("promise response........");
          console.log(response);
          console.log(response.data);
          if(response.data=='success'){
            console.log('success.....');
            this.router.navigate(['landingpage']);
          }else{
            console.log('error.....');
            this.router.navigate(['loginv1']);
          }
        }
      );
      console.log("response done........");
      
    }

}
