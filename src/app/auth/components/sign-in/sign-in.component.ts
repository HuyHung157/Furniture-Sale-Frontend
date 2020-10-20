import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  @ViewChild('formLogin') formLoginGroup;
  @ViewChild('inputPass') inputPass;

  public iconPassword = 'fa fa-eye';
  public inputTypePassword = 'password';
  public tooltipContent = 'Hiển thị mật khẩu';

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  changeType(inputType) {
    if (inputType === 'password') {
      this.iconPassword = 'fa fa-eye-slash';
      this.inputTypePassword = 'text';
      this.tooltipContent = 'Ẩn mật khẩu';
    } else {
      this.iconPassword = 'fa fa-eye';
      this.inputTypePassword = 'password';
      this.tooltipContent = 'Hiển thị mật khẩu';
    }
  }

  login(formLogin) {
    if (formLogin.valid) {
      const value = formLogin.form.value;
      console.log(value);
      this.router.navigate(['admin']);

    } else {
      this.formLoginGroup.form.markAllAsTouched();
    }
  }

}