import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CarregamentoModule } from "../shared/components/carregamento/carregamento.module";
import { MenuModule } from "../shared/components/menu/menu.module";
import { NotificacoesModule } from "../shared/components/notificacoes/notificacoes.module";
import { MostrarSeLogadoModule } from "../shared/directives/mostrar-se-logado/mostrar-se-logado.module";
import { RequisicaoInterceptor } from "./auth/requisicao.interceptor";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent
	],
	exports: [
		HeaderComponent,
		FooterComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		NotificacoesModule,
		CarregamentoModule,
		MenuModule,
		MostrarSeLogadoModule
	],
	providers: [{
		provide: HTTP_INTERCEPTORS,
		useClass: RequisicaoInterceptor,
		multi: true
	}]
})
export class CoreModule { }
