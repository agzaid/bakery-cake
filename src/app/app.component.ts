import { UsersService } from './shared/users.service';
import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bakery-cake';

  constructor( private authService: AuthService, private router: Router, private userService:UsersService){
    authService.user$.subscribe(user => {
      if (user) {
        userService.save(user);

       let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    })
  }

}
