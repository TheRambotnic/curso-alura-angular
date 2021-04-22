import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Foto } from "../foto/foto.interface";
import { FotoService } from "../foto/foto.service";

@Component({
	// não possui seletor pois o componente tem escopo de página
	templateUrl: "./foto-detalhes.component.html"
})
export class FotoDetalhesComponent implements OnInit {
	foto$: Observable<Foto>; // utiliza async pipe no template
	fotoId: number;

	constructor(private rotaActv: ActivatedRoute, private fotoServ: FotoService) {}

	ngOnInit(): void {
		this.fotoId = this.rotaActv.snapshot.params["fotoId"]; // pega parâmetro passado na rota
		this.foto$ = this.fotoServ.listarPorId(this.fotoId);
	}
}
