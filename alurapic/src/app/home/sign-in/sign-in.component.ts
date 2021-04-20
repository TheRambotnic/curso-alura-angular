import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "src/app/core/auth/auth.service";
import { PlatformDetectorService } from "src/app/core/platform-detector/platform-detector.service";

@Component({
	templateUrl: "./sign-in.component.html"
})
export class SignInComponent implements OnInit {
	loginForm: FormGroup;
	@ViewChild("userName") uNameInput: ElementRef<HTMLInputElement>;

	constructor(
		private fb: FormBuilder,
		private authServ: AuthService,
		private router: Router,
		private platformDetectServ: PlatformDetectorService
	) {}

	ngOnInit(): void {
		this.loginForm = this.fb.group({
			userName: ["", Validators.required],
			password: ["", Validators.required]
		});
		
		this.platformDetectServ.naPlataformaBrowser() && this.uNameInput.nativeElement.focus();
	}

	login() {
		const uName: string = this.loginForm.get("userName")?.value;
		const pwd: string = this.loginForm.get("password")?.value;
		this.authServ.autenticar(uName, pwd).subscribe(
			() => this.router.navigate(["user", uName]),
			err => {
				console.error(err);
				this.loginForm.reset();
				this.platformDetectServ.naPlataformaBrowser() && this.uNameInput.nativeElement.focus();
				alert("Usuário ou senha incorretos!");
			}
		);
	}
}
