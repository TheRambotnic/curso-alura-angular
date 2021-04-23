import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "src/app/core/user/user.service";
import { NotificacoesService } from "src/app/shared/components/notificacoes/notificacoes.service";
import { Foto } from "../foto/foto.interface";
import { FotoService } from "../foto/foto.service";

@Component({
	// não possui seletor pois o componente tem escopo de página
	templateUrl: "./foto-detalhes.component.html"
})
export class FotoDetalhesComponent implements OnInit {
	foto$: Observable<Foto>; // utiliza async pipe no template
	fotoId: number;

	constructor(
		private router: Router,
		private rotaActv: ActivatedRoute,
		private fotoServ: FotoService,
		private notifServ: NotificacoesService,
		private userServ: UserService
	) {}

	ngOnInit(): void {
		this.fotoId = this.rotaActv.snapshot.params["fotoId"]; // pega parâmetro passado na rota
		this.foto$ = this.fotoServ.listarPorId(this.fotoId);
		this.foto$.subscribe(() => {}, err => {
			console.log(err);
			this.router.navigate(["not-found"]);
		});
	}

	remover() {
		this.fotoServ.removerFoto(this.fotoId).subscribe(
			() => {
				this.notifServ.success("Foto removida com sucesso!", true);
				this.router.navigate(["/user", this.userServ.getUserName()]);
			},
			err => {
				console.log(err);
				this.notifServ.warning("Foto não pode ser removida!", true);
			}
		);
	}

	curtir(foto: Foto) {
		this.fotoServ.curtirFoto(foto.id).subscribe(
			curtido => {
				if (curtido) {
					this.foto$ = this.fotoServ.listarPorId(foto.id);
				}
			},
			err => alert(err)
		);
	}
}
