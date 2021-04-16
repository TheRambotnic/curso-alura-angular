import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../user/user.service";

/**
 * AuthGuard - não deixar usuário acessar rota de login
 * se ele já estiver logado
 * 
 * Implementado em app.routing.module.ts
 */
@Injectable({
	providedIn: "root"
})
export class AuthGuard implements CanActivate {
	constructor(
		private userServ: UserService,
		private router: Router
	) {}

	canActivate(route: ActivatedRouteSnapshot, estado: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
		if (this.userServ.estaLogado()) {
			this.router.navigate(["user", this.userServ.getUserName()]);
			return false;
		}

		return true;
	}
}
