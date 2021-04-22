import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { FotoComentario } from "../../foto/foto-comentarios";
import { FotoService } from "../../foto/foto.service";

@Component({
	selector: "ap-foto-comentarios",
	templateUrl: "./foto-comentarios.component.html"
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

	salvar() {
		const comentario: string = this.comentarioForm.get("comentario")?.value;
		this.fotoServ.adicionarComentario(this.fotoId, comentario).subscribe(() => {
			this.comentarioForm.reset();
			alert("Comentário enviado com sucesso!");
		});
	}
}
