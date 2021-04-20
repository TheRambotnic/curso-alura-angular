import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { debounceTime, switchMap, map, first } from "rxjs/operators";

import { SignUpService } from "./sign-up.service";

@Injectable()
export class UsernameNaoExisteValidatorService {
	constructor(private signupServ: SignUpService) { }

	checarUsernameExiste() {
		return (controle: AbstractControl) => {
			return controle
				.valueChanges
				.pipe(debounceTime(300)) // debounceTime(300) - pausar 300 ms para verificar no backend se o username existe
				.pipe(switchMap(userName => this.signupServ.checarUsernameExiste(userName)))
				.pipe(map(existe => existe ? {userNameExiste: true} : null))
				.pipe(first()); // forçar complete
		}
	}
}
