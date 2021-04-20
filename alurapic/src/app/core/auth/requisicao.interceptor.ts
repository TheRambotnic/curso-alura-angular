import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpSentEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "../token/token-service";

// interceptar requisições para o backend se o usuário não tiver acesso/estiver logado
@Injectable()
export class RequisicaoInterceptor implements HttpInterceptor {
	constructor(private tokenServ: TokenService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (this.tokenServ.temToken()) {
			const token: any = this.tokenServ.getToken();
			req = req.clone({
				setHeaders: {
					"x-access-token": token
				}
			});
		}

		return next.handle(req);
	}
}
