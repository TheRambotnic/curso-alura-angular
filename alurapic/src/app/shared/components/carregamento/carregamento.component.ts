import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { CarregamentoTipo } from "./carregamento-tipo";
import { CarregamentoService } from "./carregamento.service";

@Component({
	selector: "ap-carregamento",
	templateUrl: "./carregamento.component.html",
	styleUrls: ["./carregamento.component.css"]
})
export class CarregamentoComponent implements OnInit {
	carregamento$: Observable<string>; // tipar como string devido ao uso do .pipe() com valueOf()

	constructor(private loadServ: CarregamentoService) {}

	ngOnInit(): void {
		this.carregamento$ = this.loadServ
			.getCarregamento()
			.pipe(map(tipo => tipo.valueOf()));
	}
}
