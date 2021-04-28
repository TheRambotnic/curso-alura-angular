import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { CarregamentoService } from "./carregamento.service";

// permite usar o serviço de barra de carregamento sem ter que injetar em todos os componentes
@Injectable({ providedIn: "root" })
export class CarregamentoInterceptor implements HttpInterceptor {
	constructor(private loadServ: CarregamentoService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next
			.handle(req)
			.pipe(tap(event => {
				if (event instanceof HttpResponse) {
					this.loadServ.parar();
				}
				else {
					this.loadServ.iniciar();
				}
			}));
	}
}
