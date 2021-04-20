import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
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
		RouterModule
	],
	providers: [{
		provide: HTTP_INTERCEPTORS,
		useClass: RequisicaoInterceptor,
		multi: true
	}]
})
export class CoreModule { }
