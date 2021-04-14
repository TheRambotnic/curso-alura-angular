import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Foto } from '../foto/foto.interface';
import { FotoService } from '../foto/foto.service';

@Component({
	selector: 'ap-foto-lista',
	templateUrl: './foto-lista.component.html',
	styleUrls: ['./foto-lista.component.css']
})
export class FotoListaComponent implements OnInit, OnDestroy {
	fotos: Foto[] = [];
	filtro: string = "";
	debounce: Subject<string> = new Subject<string>(); // permite pausar execução de um filtro por um determinado tempo
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
		this.username = this.activatedRoute.snapshot.params.userName;
		this.fotos = this.activatedRoute.snapshot.data["fotos"];
		this.debounce
			.pipe(debounceTime(300)) // esperar 0.3 segundos para aplicar o filtro em fotos
			.subscribe(fil => this.filtro = fil);
	}

	ngOnDestroy(): void {
		this.debounce.unsubscribe(); // desalocar espaço na memória ao sair do componente
	}

	carregar() {
		// o Resolver já carrega a primeira página por padrão
		// por isso, efetuar um pré-incremento na página
		this.fotoServ.listarDeUsuarioPaginada(this.username, ++this.paginaAtual)
			.subscribe(fotos => {
				this.fotos = this.fotos.concat(fotos);

				if (fotos.length === 0)
					this.temMais = false;
			});
	}
}
