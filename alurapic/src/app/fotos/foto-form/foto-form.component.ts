import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { UserService } from 'src/app/core/user/user.service';
import { NotificacoesService } from 'src/app/shared/components/notificacoes/notificacoes.service';
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
	percentual: number = 0;

	constructor(
		private fb: FormBuilder,
		private fotoServ: FotoService,
		private router: Router,
		private notifServ: NotificacoesService,
		private userServ: UserService
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

	handleFile(e: Event) {
		// variáveis auxiliares para não ocorrer erro de Property 'files' does not exist on type 'EventTarget'.
		// usada em foto-form.component.html no event binding (change) de <input type="file">
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

		this.fotoServ
			.enviarFoto(descricao, permitirComentarios, this.arquivoIMG)
			.pipe(finalize(() => {
				// enviar usuário para timeline após a operação terminar
				this.router.navigate(["/user", this.userServ.getUserName()]);
			}))
			.subscribe(
				(event: HttpEvent<any>) => {
					if (event.type == HttpEventType.UploadProgress) {
						// event.total - não funciona
						// this.percentual = Math.round(100 * event.loaded / event.total);
						this.percentual = Math.round(100 * event.loaded / 10);
					}
					else if (event.type == HttpEventType.Response) {
						this.notifServ.success("Foto enviada com sucesso!", true);
					}
				},
				err => {
					console.log(err);
					this.notifServ.danger("Erro de upload", true);
				}
			);
	}
}
