import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CardComponent } from "./card.component";

@NgModule({
	declarations: [CardComponent],
	imports: [
		CommonModule, // sempre importar esse módulo em todos os componentes criados
	],
	exports: [CardComponent]
})
export class CardModule { }
