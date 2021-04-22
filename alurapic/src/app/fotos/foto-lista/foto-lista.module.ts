import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CardModule } from "src/app/shared/components/card/card.module";
import { EscurecerHoverModule } from "src/app/shared/directives/escurecer-hover/escurecer-hover.module";
import { FotoModule } from "../foto/foto.module";
import { FiltrarPorDescricaoPipe } from "./filtrar-por-descricao.pipe";
import { FotoListaComponent } from "./foto-lista.component";
import { FotosComponent } from "./fotos/fotos.component";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { PesquisaComponent } from "./pesquisa/pesquisa.component";

@NgModule({
	declarations: [
		FotoListaComponent,
		FotosComponent,
		LoadButtonComponent,
		FiltrarPorDescricaoPipe,
		PesquisaComponent
	],
	imports: [
		CommonModule, // sempre importar esse módulo em todos os componentes criados
		FotoModule,
		CardModule,
		EscurecerHoverModule,
		RouterModule
	]
})
export class FotoListaModule { }
