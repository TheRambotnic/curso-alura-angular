import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { PlatformDetectorService } from "src/app/core/platform-detector/platform-detector.service";

import { caixaBaixaValidator } from "src/app/shared/validators/caixa-baixa.validator";
import { NewUser } from "./new-user.interface";
import { SignUpService } from "./sign-up.service";
import { UsernameNaoExisteValidatorService } from "./username-nao-existe.validator.service";

@Component({
	templateUrl: "./sign-up.component.html",
	providers: [UsernameNaoExisteValidatorService]
})
export class SignUpComponent implements OnInit {
	signupForm: FormGroup;
	@ViewChild("inputEmail") inputEmail: ElementRef<HTMLInputElement>;

	constructor(
		private fb: FormBuilder,
		private signupServ: SignUpService,
		private userExisteValServ: UsernameNaoExisteValidatorService,
		private router: Router,
		private platformDetector: PlatformDetectorService
	) {}

	ngOnInit(): void {
		this.signupForm = this.fb.group({
			email: [
				"",
				Validators.compose([
					Validators.required,
					Validators.email
				])
			],
			fullName: [
				"",
				Validators.compose([
					Validators.required,
					Validators.minLength(2),
					Validators.maxLength(50)
				])
			],
			userName: [
				"",
				Validators.compose([
					Validators.required,
					Validators.minLength(2),
					Validators.maxLength(30),
					// Validators.pattern(/^[a-z0-9_\-]+$/)
					caixaBaixaValidator
				]),
				this.userExisteValServ.checarUsernameExiste()
			],
			password: [
				"",
				Validators.compose([
					Validators.required,
					Validators.minLength(8),
					Validators.maxLength(16)
				])
			]
		});

		this.platformDetector.naPlataformaBrowser() && this.inputEmail?.nativeElement.focus();
	}

	registrar() {
		// getRawValue() - devolve um objeto com todos os campos e valores do FormGroup
		const novoUser: NewUser = this.signupForm.getRawValue();
		this.signupServ.registrar(novoUser).subscribe(
			() => this.router.navigate([""]),
			err => console.log(err)
		);
	}
}
