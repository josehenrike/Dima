import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

import { UsuarioAutenticadoGuard } from './usuario-autenticado.guard';

describe('usuarioAutenticadoGuard', () => {
  const executeGuard: CanActivateFn = () =>
    TestBed.runInInjectionContext(() => {
      const usuarioService = TestBed.inject(UsuarioService);
      const router = TestBed.inject(Router);
      const guard = new UsuarioAutenticadoGuard(usuarioService, router);
      return guard.canActivate();
    });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioService, Router]
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});