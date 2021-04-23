import { Component, Input } from "@angular/core";

import { Notificacoes, TipoNotificacao } from "./notificacoes";
import { NotificacoesService } from "./notificacoes.service";

@Component({
	selector: "ap-notificacao",
	templateUrl: "./notificacoes.component.html"
})
export class NotificacoesComponent {
	@Input() timeout = 3000;
	notificacoes: Notificacoes[] = [];

	constructor(private notifServ: NotificacoesService) {
		this.notifServ.getAlerta().subscribe(notif => {
			if (!notif) {
				this.notificacoes = []; // limpar array se notificação for nula
				return;
			}
			
			this.notificacoes.push(notif);

			// limpar notificação
			setTimeout(() => {
				this.removerNotificacao(notif);
			}, this.timeout);
		});
	}

	removerNotificacao(notificacao: Notificacoes) {
		this.notificacoes = this.notificacoes.filter(notif => notif != notificacao);
	}

	getClasseAlerta(notif: Notificacoes) {
		if (!notif) return "";

		switch (notif.tipo) {
			case TipoNotificacao.SUCCESS:
				return "alert alert-success";
			case TipoNotificacao.WARNING:
				return "alert alert-warning";
			case TipoNotificacao.DANGER:
				return "alert alert-danger";
			case TipoNotificacao.INFO:
				return "alert alert-info";
		}
	}
}
