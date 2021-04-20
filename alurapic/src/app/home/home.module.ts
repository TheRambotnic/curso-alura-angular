import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { VMessageModule } from "../shared/components/vmessage/vmessage.module";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing.module";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignUpService } from "./sign-up/sign-up.service";

@NgModule({
	declarations: [
		SignInComponent,
		SignUpComponent,
		HomeComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		VMessageModule,
		RouterModule,
		HomeRoutingModule
	],
	providers: [SignUpService]
})
export class HomeModule { }
