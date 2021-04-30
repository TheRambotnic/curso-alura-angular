import { AbstractControl, ValidatorFn } from "@angular/forms";

export const usernamePasswordValidator: ValidatorFn = (control: AbstractControl) => {
	const username = control.get("userName")?.value;
	const password = control.get("password")?.value;

	// fazer verificação somente se os campos não estiverem vazios
	if (username.trim() + password.trim()) {
		return (username != password) ? null : {userNamePassword: true};
	}
	else {
		return null;
	}
}