import { CanActivate } from '@angular/router';
import { Authservice } from '../service/authservice';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class providerguardGuard implements CanActivate {

  constructor(private auth: Authservice, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.isProvider()) return true;
    this.router.navigate(['/login']);
    return false;
  }
}











