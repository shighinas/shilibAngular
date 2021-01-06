import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AuthService } from '../auth.service';
import { AlertService } from '../_alert';
import { UserModel } from './user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user = new UserModel('', '', '', '');
  confpass: string = '';
  loginUser = { email: '', password: ''};

  constructor( private _auth: AuthService, private router: Router, private alertservice: AlertService) { }
  // $: any;
  ngOnInit(): void {
    this.user = new UserModel('', '', '', '');
    this.confpass = '';
    this.loginUser = { email: '', password: ''};
    $('#hide').click(function(){
      $('.signUp').animate({left: '500px', width: 'toggle'},'slow', ()=>{
          $('.shig').toggle();
          $('.hidden').toggle();
      });
    });
    $('#hide2').click(function(){
      location.reload();
    });
  }

  loginVerify(){
    this._auth.loginUser(this.loginUser)
    .subscribe( (res)=>{
      localStorage.setItem('token', res.token);
      if(res.role != ''){
        localStorage.setItem('role', res.role);
        alert('Welcome Admin');
      }
      else{
        alert('Successfully logged in.')
      }
      this.router.navigate(['nav/books']);
    }, (err)=>{
      console.log(err);
      alert('Incorrect Username or password');
      this.ngOnInit();
    });
  }

  regUser(){
    this._auth.userReg(this.user)
    .subscribe( (res)=>{
      console.log(JSON.parse(JSON.stringify(res.text)));
      this.alertservice.success('successfully registered, pls login to continue.');
      alert('successfully registered, pls Click on signIn to continue.')
    }, (err)=>{
      console.log(err.error);
      this.alertservice.error(err.error+ ', registration failed');
      alert(err.error);
  });
  this.ngOnInit();
  }


}
