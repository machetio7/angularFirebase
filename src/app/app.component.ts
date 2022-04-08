import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  faCoffee = faUser;
  usuario = {
    email: '',
    pass: '',
  };
  constructor(private serviceAuth: AuthService) {}

  login() {
    console.log(this.usuario);
    const { email, pass } = this.usuario;
    this.serviceAuth.resgiter(email, pass).then((res) => {
      console.log(res);
    });
  }

  loginGoogle() {
    console.log(this.usuario);
    const { email, pass } = this.usuario;
    this.serviceAuth.loginWithGoogle(email, pass).then((res) => {
      console.log(res);
    });
  }


}
