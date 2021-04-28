import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { startWith } from "rxjs/operators";
import { CarregamentoTipo } from "./carregamento-tipo";

@Injectable({ providedIn: "root" })
export class CarregamentoService {
	carregamentoSubj = new Subject<CarregamentoTipo>();

	getCarregamento() {
		return this.carregamentoSubj
			.asObservable()
			.pipe(startWith<CarregamentoTipo>(CarregamentoTipo.PARADO));
	}

	iniciar() {
		// emitir valor ao Subject
		this.carregamentoSubj.next(CarregamentoTipo.CARREGANDO);
	}

	parar() {
		// emitir valor ao Subject
		this.carregamentoSubj.next(CarregamentoTipo.PARADO);
	}
}
