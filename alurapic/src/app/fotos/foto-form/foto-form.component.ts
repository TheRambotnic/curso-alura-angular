import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FotoService } from '../foto/foto.service';

@Component({
	selector: 'ap-foto-form',
	templateUrl: './foto-form.component.html',
	styleUrls: ['./foto-form.component.css']
})
export class FotoFormComponent implements OnInit {
	fotoForm: FormGroup;
	arquivoIMG: any; // tipar como File dá erro
	preview: any;

	constructor(
		private fb: FormBuilder,
		private fotoServ: FotoService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.fotoForm = this.fb.group({
			imagem: [
				"",
				Validators.required
			],
			descricao: [
				"",
				Validators.compose([
					Validators.required,
					Validators.maxLength(300)
				])
			],
			permitirComentarios: [true]
		});
	}

	// função auxiliar para não ocorrer erro de Property 'files' does not exist on type 'EventTarget'.
	// usada em foto-form.component.html no event binding (change) de <input type="file">
	getImg(e: Event) {
		const target = e.target as HTMLInputElement;
		this.arquivoIMG = target?.files as any; // tipar com FileList dá erro
	}

	handleFile(e: Event) {
		const target = e.target as HTMLInputElement;
		const file = target?.files as any;
		this.arquivoIMG = file[0];

		const fr = new FileReader();
		fr.onload = (event: any) => this.preview = event.target?.result;
		fr.readAsDataURL(file[0]);
	}

	enviar() {
		const descricao = this.fotoForm.get("descricao")?.value;
		const permitirComentarios = this.fotoForm.get("permitirComentarios")?.value;

		this.fotoServ.enviarFoto(descricao, permitirComentarios, this.arquivoIMG[0])
			.subscribe(() => this.router.navigate([""]));
	}
}
