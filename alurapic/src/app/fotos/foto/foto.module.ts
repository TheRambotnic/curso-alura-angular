import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FotoComponent } from "./foto.component";

@NgModule({
	declarations: [
		FotoComponent
	],
	imports: [
		CommonModule, // sempre importar esse módulo em todos os componentes criados
		HttpClientModule
	],
	exports: [FotoComponent]
})
export class FotoModule { }
