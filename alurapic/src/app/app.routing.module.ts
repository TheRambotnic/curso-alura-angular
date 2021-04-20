import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FotoFormComponent } from "./fotos/foto-form/foto-form.component";
import { FotoListaComponent } from "./fotos/foto-lista/foto-lista.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { FotoListaResolver } from "./fotos/foto-lista/foto-lista.resolver";
import { AuthGuard } from "./core/auth/auth.guard";

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
		}
	},
	{
		path: "foto/adicionar",
		component: FotoFormComponent,
		canActivate: [AuthGuard]
	},
	{
		path: "**",
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(rotas)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
