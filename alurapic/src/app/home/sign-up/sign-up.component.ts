import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
	templateUrl: "./sign-up.component.html"
})
export class SignUpComponent implements OnInit {
	signupForm: FormGroup;

	constructor(private fb: FormBuilder) {}

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
					Validators.pattern(/^[a-z0-9_\-]+$/)
				])
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
	}
}
