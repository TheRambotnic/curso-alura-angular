import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NotificacoesComponent } from "./notificacoes.component";

@NgModule({
	declarations: [NotificacoesComponent],
	imports: [CommonModule],
	exports: [NotificacoesComponent]
})
export class NotificacoesModule {}
