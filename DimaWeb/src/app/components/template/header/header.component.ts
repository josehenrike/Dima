import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private usuarioService: UsuarioService) { }
  ngOnInit(): void {
  }
  deslogar() {
    this.usuarioService.deslogar();
  }
}
