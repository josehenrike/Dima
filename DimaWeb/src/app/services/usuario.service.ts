import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUsuario } from '../interfaces/IUsuario';
const apiUrlUsuario = environment.apiUrl + "Usuario";
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private httpClient: HttpClient,
    private router: Router) { }
  logar(usuario: IUsuario): Observable<any> {
    /*return this.httpClient.post<any>(apiUrlUsuario + "/login", usuario).pipe(
      tap((resposta) => {
        if(!resposta.sucesso) return;
        localStorage.setItem('token', btoa(JSON.stringify(resposta['token'])));
        localStorage.setItem('usuario', btoa(JSON.stringify(resposta['usuario'])));
        this.router.navigate(['']);
      }));*/
    return this.mockUsuarioLogin(usuario).pipe(tap((resposta) => {
      if (!resposta.sucesso) return;
      localStorage.setItem('token', btoa(JSON.stringify("TokenQueSeriaGeradoPelaAPI")));
      localStorage.setItem('usuario', btoa(JSON.stringify(usuario)));
      this.router.navigate(['']);
    }));
  }
  private mockUsuarioLogin(usuario: IUsuario): Observable<any> {
    var retornoMock: any = [];
    if (usuario.email === "hello@balta.io" && usuario.senha == "123") {
      retornoMock.sucesso = true;
      retornoMock.usuario = usuario;
      retornoMock.token = "TokenQueSeriaGeradoPelaAPI";
      return of(retornoMock);
    }
    retornoMock.sucesso = false;
    retornoMock.usuario = usuario;
    return of(retornoMock);
  }
  deslogar() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
  get obterUsuarioLogado(): IUsuario | null {
    const usuario = localStorage.getItem('usuario');
    return usuario ? JSON.parse(atob(usuario)) as IUsuario : null;
  }

  get obterIdUsuarioLogado(): string {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      const id = (JSON.parse(atob(usuario)) as IUsuario).id;
      return String(id); // Converte 'id' de 'number' para 'string'
    }
    return '';
  }


  get obterTokenUsuario(): string | null {
    const token = localStorage.getItem('token');
    return token ? atob(token) : null;
  }

  get logado(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}