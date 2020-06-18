import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidator } from './username.validators';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  public function1(username) {
    console.log(username);
  }
  form1 = new FormGroup({
    'username': new FormControl('', [Validators.required, Validators.minLength(3), UsernameValidator.CanNotContainSpace]),
    'password': new FormControl('', Validators.required)
  })

  get username() {

    return this.form1.get('username');
  }

  onLogin() {
    console.log(12345);
    this.form1.setErrors({
      invalideLogin : true
    })
  }
}
