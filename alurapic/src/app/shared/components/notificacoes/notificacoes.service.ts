import { Injectable } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { Subject } from "rxjs";

import { Notificacoes, TipoNotificacao } from "./notificacoes";

@Injectable({ providedIn: "root" })
export class NotificacoesService {
	notifSubj: Subject<Notificacoes> = new Subject<Notificacoes>();
	manterAposTrocarRota: boolean = false;

	constructor(router: Router) {
		router.events.subscribe(event => {
			if (event instanceof NavigationStart) {
				if (this.manterAposTrocarRota) {
					this.manterAposTrocarRota = false;
				}
				else {
					this.limpar();
				}
			}
		});
	}

	// método utilizado nas funções auxiliares
	private alerta(tipo: TipoNotificacao, msg: string, manter: boolean) {
		this.manterAposTrocarRota = manter;
		this.notifSubj.next(new Notificacoes(tipo, msg));
	}

	// métodos auxiliares para evitar digitação do tipo de notificação em alerta()
	success(msg: string, manter: boolean = false) {
		this.alerta(TipoNotificacao.SUCCESS, msg, manter);
	}

	warning(msg: string, manter: boolean = false) {
		this.alerta(TipoNotificacao.WARNING, msg, manter);
	}

	danger(msg: string, manter: boolean = false) {
		this.alerta(TipoNotificacao.DANGER, msg, manter);
	}

	info(msg: string, manter: boolean = false) {
		this.alerta(TipoNotificacao.INFO, msg, manter);
	}

	getAlerta() {
		return this.notifSubj.asObservable();
	}

	limpar() {
		this.notifSubj.next(new Notificacoes(-1, ""));
	}
}
