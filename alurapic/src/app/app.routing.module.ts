import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FotoFormComponent } from "./fotos/foto-form/foto-form.component";
import { FotoListaComponent } from "./fotos/foto-lista/foto-lista.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { FotoListaResolver } from "./fotos/foto-lista/foto-lista.resolver";
import { AuthGuard } from "./core/auth/auth.guard";
import { FotoDetalhesComponent } from "./fotos/foto-detalhes/foto-detalhes.component";
import { GlobalErrorComponent } from "./errors/global-error/global-error.component";

const rotas: Routes = [
	{
		path: "",
		pathMatch: "full",
		redirectTo: "home"
	},
	{
		path: "home",
		loadChildren: () => import("./home/home.module").then(mod => mod.HomeModule) // lazy loading
	},
	{
		path: "user/:userName",
		component: FotoListaComponent,
		resolve: {
			// propriedade : Resolver
			fotos: FotoListaResolver
		},
		data: {
			title: "Timeline"
		}
	},
	{
		path: "foto/adicionar",
		component: FotoFormComponent,
		canActivate: [AuthGuard],
		data: {
			title: "Upload de fotos"
		}
	},
	{
		path: "foto/:fotoId",
		component: FotoDetalhesComponent,
		data: {
			title: "Detalhe da foto"
		}
	},
	{
		path: "not-found",
		component: NotFoundComponent,
		data: {
			title: "Página não encontrada"
		}
	},
	{
		path: "error",
		component: GlobalErrorComponent,
		data: {
			title: "Erro"
		}
	},
	{
		path: "**",
		redirectTo: "not-found"
	}
];

@NgModule({
	imports: [RouterModule.forRoot(rotas)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
