export class Notificacoes {
	constructor(
		public readonly tipo: TipoNotificacao,
		public readonly mensagem: string
	) {}
}

export enum TipoNotificacao {
	SUCCESS,
	WARNING,
	DANGER,
	INFO
}
