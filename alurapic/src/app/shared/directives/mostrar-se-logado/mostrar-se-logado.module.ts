import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MostrarSeLogadoDirective } from "./mostrar-se-logado.directive";

@NgModule({
	declarations: [MostrarSeLogadoDirective],
	imports: [CommonModule],
	exports: [MostrarSeLogadoDirective]
})
export class MostrarSeLogadoModule {}