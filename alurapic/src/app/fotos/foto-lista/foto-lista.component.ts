import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Foto } from '../foto/foto.interface';
import { FotoService } from '../foto/foto.service';

@Component({
	selector: 'ap-foto-lista',
	templateUrl: './foto-lista.component.html',
	styleUrls: ['./foto-lista.component.css']
})
export class FotoListaComponent implements OnInit {
	fotos: Foto[] = [];
	filtro: string = "";
	temMais: boolean = true;
	paginaAtual: number = 1;
	username: string = "";

	constructor(
		private fotoServ: FotoService,
		private activatedRoute: ActivatedRoute // permite acesso ao valor passado para rota
	) { }

	// executar lógica do componente apenas quando o app instanciar a classe
	// necessário implementar interface 'OnInit'
	ngOnInit(): void {
		this.activatedRoute.params.subscribe(params => {
			this.username = params.userName;
			this.fotos = this.activatedRoute.snapshot.data["fotos"];
		});
	}

	carregar() {
		// o Resolver já carrega a primeira página por padrão
		// por isso, efetuar um pré-incremento na página
		this.fotoServ.listarDeUsuarioPaginada(this.username, ++this.paginaAtual)
			.subscribe(fotos => {
				this.filtro = "";
				this.fotos = this.fotos.concat(fotos);

				if (fotos.length === 0)
					this.temMais = false;
			});
	}
}
