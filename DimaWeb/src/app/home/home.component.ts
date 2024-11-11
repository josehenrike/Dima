import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private usuarioService: UsuarioService) { }
  ngOnInit(): void {
  }
  deslogar() {
    this.usuarioService.deslogar();
  }
}
