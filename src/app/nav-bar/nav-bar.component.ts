import { AuthService } from './../shared/auth.service';
import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isMenuCollapsed: boolean = true;

  constructor(@Inject(DOCUMENT) private document: Document, public authService:AuthService) { }

  @HostListener('window:scroll',[])
  onWindowScroll() {
    if (document.body.scrollTop > 100 ||     
    document.documentElement.scrollTop > 100) {
      document.getElementById('addClass').classList.add('secondry');
    } else {
      document.getElementById('addClass').classList.remove('secondry');
    }
  };

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
  }
  

}
