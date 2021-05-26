import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = ""
  pass:string = ""
  validateUser:boolean = false

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  authenticateLogin(){
    if(this.email?.toLowerCase() == "admin@admin.com" && this.pass?.toLowerCase() == "admin")
    {
      this.validateUser = true
      this.router.navigate(['/home']);
    }
  }
}
