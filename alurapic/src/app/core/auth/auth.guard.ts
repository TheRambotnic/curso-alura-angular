import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../user/user.service";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
	constructor(
		private userServ: UserService,
		private router: Router
	) { }

	canActivate(route: ActivatedRouteSnapshot, estado: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
		if (!this.userServ.estaLogado()) {
			this.router.navigate(
				[""],
				{
					// pega rota que eu tentei acessar anteriormente
					queryParams: {
						fromUrl: estado.url
					}
				}
			);
			return false;
		}

		return true;
	}
}
