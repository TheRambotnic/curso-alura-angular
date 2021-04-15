import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FotoFormComponent } from "./foto-form.component";

@NgModule({
	declarations: [
		FotoFormComponent
	],
	imports: [
		CommonModule // sempre importar esse módulo em todos os componentes criados
	]
})
export class FotoFormModule { }
