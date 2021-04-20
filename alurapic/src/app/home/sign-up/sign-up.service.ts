import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NewUser } from "./new-user.interface";

const apiURL = "http://localhost:3000"

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
