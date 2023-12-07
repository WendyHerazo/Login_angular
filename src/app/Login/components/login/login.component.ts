import { AuthService } from './../../../service/auten.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent {
  loginForm: FormGroup;

  constructor( private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    });
  }

  login() {
    if(this.loginForm.valid){
      const email = this.loginForm.get('email')!.value;
      const password = this.loginForm.get('password')!.value;

  } else {
    console.log('Formulario no válido. Por favor, completa todos los campos correctamente.');
    }

  }
}
