import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public _auth: AuthService) { }

  ngOnInit(): void {
  }

  logoutUser(){
    localStorage.removeItem('token');
    if(this._auth.isAdmin()){
      localStorage.removeItem('role');
    }
    this.router.navigate(['']);
  }

}
