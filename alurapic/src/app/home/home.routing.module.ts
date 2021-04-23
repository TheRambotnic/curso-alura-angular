import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LogInGuard } from "../core/auth/login.guard";
import { HomeComponent } from "./home.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

const rotas: Routes = [
	{
		path: "",
		component: HomeComponent,
		canActivate: [LogInGuard],
		children: [
			{
				path: "",
				component: SignInComponent,
				data: {
					title: "Entrar"
				}
			},
			{
				path: "signup",
				component: SignUpComponent,
				data: {
					title: "Registrar"
				}
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(rotas)],
	exports: [RouterModule]
})
export class HomeRoutingModule { }
