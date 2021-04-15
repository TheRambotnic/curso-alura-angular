import { NgModule } from "@angular/core";

import { FotoModule } from "./foto/foto.module";
import { FotoFormModule } from "./foto-form/foto-form.module";
import { FotoListaModule } from "./foto-lista/foto-lista.module";

@NgModule({
	imports: [
		FotoModule,
		FotoFormModule,
		FotoListaModule
	],
})
export class FotosModule { }
