import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { VMessageModule } from "src/app/shared/components/vmessage/vmessage.module";
import { MostrarSeLogadoModule } from "src/app/shared/directives/mostrar-se-logado/mostrar-se-logado.module";
import { FotoModule } from "../foto/foto.module";
import { FotoComentariosComponent } from "./foto-cometarios/foto-comentarios.component";
import { FotoDetalhesComponent } from "./foto-detalhes.component";
import { FotoDonoApenasDirective } from "./foto-dono-apenas/foto-dono-apenas.directive";

@NgModule({
	declarations: [
		FotoDetalhesComponent,
		FotoComentariosComponent,
		FotoDonoApenasDirective
	],
	exports: [
		FotoDetalhesComponent,
		FotoComentariosComponent
	],
	imports: [
		CommonModule,
		FotoModule,
		RouterModule,
		ReactiveFormsModule,
		VMessageModule,
		MostrarSeLogadoModule
	]
})
export class FotoDetalhesModule {}
