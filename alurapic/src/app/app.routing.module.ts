import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FotoFormComponent } from "./fotos/foto-form/foto-form.component";
import { FotoListaComponent } from "./fotos/foto-lista/foto-lista.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { FotoListaResolver } from "./fotos/foto-lista/foto-lista.resolver";
import { SignInComponent } from "./home/sign-in/sign-in.component";

const rotas: Routes = [
	{
		path: "",
		component: SignInComponent
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
		path: "f/adicionar",
		component: FotoFormComponent
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
export class AppRoutingModule{ }