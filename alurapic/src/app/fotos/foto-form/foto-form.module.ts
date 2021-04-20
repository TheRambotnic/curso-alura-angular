import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { VMessageModule } from "src/app/shared/components/vmessage/vmessage.module";
import { CliqueImediatoModule } from "src/app/shared/directives/clique-imediato/clique-imediato.module";
import { FotoModule } from "../foto/foto.module";
import { FotoFormComponent } from "./foto-form.component";

@NgModule({
	declarations: [
		FotoFormComponent
	],
	imports: [
		CommonModule, // sempre importar esse módulo em todos os componentes criados
		ReactiveFormsModule,
		FormsModule,
		VMessageModule,
		RouterModule,
		FotoModule,
		CliqueImediatoModule
	]
})
export class FotoFormModule { }
