import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { switchMap, tap } from "rxjs/operators";

import { FotoComentario } from "../../foto/foto-comentarios";
import { FotoService } from "../../foto/foto.service";

@Component({
	selector: "ap-foto-comentarios",
	templateUrl: "./foto-comentarios.component.html",
	styleUrls: ["foto-comentarios.css"]
})
export class FotoComentariosComponent implements OnInit {
	@Input() fotoId: number;
	comentarios$: Observable<FotoComentario[]>;
	comentarioForm: FormGroup;

	constructor(private fotoServ: FotoService, private fb: FormBuilder) {}

	ngOnInit(): void {
		this.comentarioForm = this.fb.group({
			comentario: ["", Validators.maxLength(300)]
		});
		this.comentarios$ = this.fotoServ.listarComentarios(this.fotoId);
	}

	/*
		O operador switchMap cancela o Observable anterior passando o fluxo para
		um novo Observable, garantindo assim que a emissão tenha apenas o valor
		emitido pelo Observable retornado por switchMap.
	*/
	salvar() {
		const comentario: string = this.comentarioForm.get("comentario")?.value;
		this.comentarios$ = this.fotoServ
			.adicionarComentario(this.fotoId, comentario)
			.pipe(switchMap(() => this.fotoServ.listarComentarios(this.fotoId)))
			.pipe(tap(() => {
				this.comentarioForm.reset();
				alert("Comentário adicionado com sucesso");
			}));
	}
}
