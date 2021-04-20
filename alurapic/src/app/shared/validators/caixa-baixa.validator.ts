import { AbstractControl } from "@angular/forms";

// todo validator recebe como parâmetro um AbstractControl
export function caixaBaixaValidator(controle: AbstractControl) {
	if (controle.value.trim() && !/^[a-z0-9_\-]+$/.test(controle.value)) {
		return {
			// nome do validator
			caixaBaixa: true
		}
	}

	return null;
}
