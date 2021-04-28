import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CarregamentoComponent } from "./carregamento.component";
import { CarregamentoInterceptor } from "./carregamento.interceptor";

@NgModule({
	declarations: [CarregamentoComponent],
	exports: [CarregamentoComponent],
	imports: [CommonModule],
	providers: [{
		provide: HTTP_INTERCEPTORS,
		useClass: CarregamentoInterceptor,
		multi: true
	}]
})
export class CarregamentoModule {}