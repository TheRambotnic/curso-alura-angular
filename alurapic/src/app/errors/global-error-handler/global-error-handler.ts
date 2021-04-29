import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import * as StackTrace from "stacktrace-js";

import { UserService } from "src/app/core/user/user.service";
import { ServerLogService } from "./server-log.service";
import { environment } from "../../../environments/environment";

// não precisa do providedIn pois a classe está no escopo do ErrorsModule
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
	constructor(private injector: Injector) {}

	handleError(error: any): void {
		// injeção de dependência por demanda (sem ser no constructor())
		// porém precisa do Injector no constructor
		const location = this.injector.get(LocationStrategy);
		const userServ = this.injector.get(UserService);
		const serverLogServ = this.injector.get(ServerLogService);
		const router = this.injector.get(Router);
		
		// pega a rota de onde ocorreu o erro
		const url = location instanceof PathLocationStrategy ? location.path() : "";

		// parâmetro 'error' nem sempre é uma instância de error
		// converter para string caso não for
		const message = error.message ? error.message : error.toString();

		if (environment.production)
			router.navigate(["/error"]);

		StackTrace
			.fromError(error) // passa instância do erro
			.then(stackFrame => {
				// stackFrame retorna um array
				const stackComoString = stackFrame
					.map(sf => sf.toString())
					.join("\n\n");
				
				console.error(message);
				console.log(stackComoString);

				// manda erro para o servidor
				serverLogServ.log({
					message,
					url,
					userName: userServ.getUserName(),
					stack: stackComoString
				})
				.subscribe(
					() => {
						console.log("Erro logado no server!");
					},
					err => {
						console.log(err);
						console.log("Falha ao mandar erro para o server");
					}
				);
			});
	}
}
