import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Foto } from '../../foto/foto.interface';

@Component({
	selector: 'ap-fotos',
	templateUrl: './fotos.component.html',
	styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnChanges {
	@Input() fotos: Foto[] = [];
	linhas: any[] = [];

	constructor() { }

	// chamada quando há mudança em uma propriedade
	ngOnChanges(mudancas: SimpleChanges): void {
		if (mudancas.fotos) {
			this.linhas = this.grupoColunas(this.fotos);
		}
	}

	grupoColunas(fotos: Foto[]) {
		const novaLinha: any[] = [];

		for (let i = 0; i < fotos.length; i+=3) {
			novaLinha.push(fotos.slice(i, i+3));
		}

		return novaLinha;
	}
}
