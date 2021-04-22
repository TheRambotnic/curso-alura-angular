import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { VMessageModule } from "src/app/shared/components/vmessage/vmessage.module";
import { FotoModule } from "../foto/foto.module";
import { FotoComentariosComponent } from "./foto-cometarios/foto-comentarios.component";
import { FotoDetalhesComponent } from "./foto-detalhes.component";

@NgModule({
	declarations: [
		FotoDetalhesComponent,
		FotoComentariosComponent
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
		VMessageModule
	]
})
export class FotoDetalhesModule {}
