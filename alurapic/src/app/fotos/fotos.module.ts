import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { FotoComponent } from "./foto/foto.component";
import { FotoListaComponent } from './foto-lista/foto-lista.component';
import { FotoFormComponent } from './foto-form/foto-form.component';
import { FotosComponent } from './foto-lista/fotos/fotos.component';
import { FiltrarPorDescricaoPipe } from "./foto-lista/filtrar-por-descricao.pipe";
import { LoadButtonComponent } from './foto-lista/load-button/load-button.component';

@NgModule({
	declarations: [
		FotoComponent,
		FotoListaComponent,
  		FotoFormComponent,
   		FotosComponent,
		FiltrarPorDescricaoPipe,
		LoadButtonComponent
	],
	imports: [
		HttpClientModule,
		CommonModule // sempre importar esse módulo em todos os componentes criados
	],
})
export class FotosModule { }
