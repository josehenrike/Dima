import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service'; // Import the UsuarioService
import { Router } from '@angular/router'; // Import the Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup; // Declaração da propriedade

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) { } // Inject the UsuarioService and Router

  ngOnInit(): void {
    // Inicializando a propriedade formLogin
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  logar(): void {
    if (this.formLogin.valid) {
      console.log('Formulário válido:', this.formLogin.value);
      // Lógica para enviar o formulário de login
      this.usuarioService.logar(this.formLogin.value).subscribe(() => {
        this.router.navigate(['/']); // Redireciona para a rota do home
      });
    } else {
      console.log('Formulário inválido');
    }
  }
}