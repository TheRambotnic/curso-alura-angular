import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
	selector: "ap-pesquisa",
	templateUrl: "./pesquisa.component.html"
})
export class PesquisaComponent implements OnInit, OnDestroy {
	@Output() naDigitacao = new EventEmitter<string>();
	@Input() valor: string = "";
	debounce: Subject<string> = new Subject<string>(); // permite pausar execução de um filtro por um determinado tempo
	
	ngOnInit(): void {
		this.debounce
			.pipe(debounceTime(300)) // esperar 0.3 segundos para aplicar o filtro em fotos
			.subscribe(fil => this.naDigitacao.emit(fil));
	}

	ngOnDestroy(): void {
		this.debounce.unsubscribe(); // desalocar espaço na memória
	}
}
