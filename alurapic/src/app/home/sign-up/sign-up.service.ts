import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { NewUser } from "./new-user.interface";
import { environment } from "../../../environments/environment";

const apiURL = environment.API_URL;

@Injectable()
export class SignUpService {
	constructor(private http: HttpClient) { }

	checarUsernameExiste(username: string) {
		return this.http.get(apiURL + "/user/exists/" + username);
	}

	registrar(user: NewUser) {
		return this.http.post(apiURL + "/user/signup/", user);
	}
}
