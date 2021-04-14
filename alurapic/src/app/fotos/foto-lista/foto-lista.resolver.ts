import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { FotoService } from "../foto/foto.service";
import { Foto } from "../foto/foto.interface";

/**
 * Resolver permite carregar dados assíncronos ANTES do
 * componente mostrar esse dados
 */
@Injectable({ providedIn: "root" }) // previne o erro de 'No Providers for Service'
export class FotoListaResolver implements Resolve<Observable<Foto[]>> {
	constructor(private service: FotoService) { }

	resolve(rota: ActivatedRouteSnapshot, estado: RouterStateSnapshot): Observable<Foto[]> {
		const username = rota.params.userName;
		return this.service.listarDeUsuarioPaginada(username, 1);
	}
}
