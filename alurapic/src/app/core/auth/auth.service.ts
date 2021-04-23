import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from "rxjs/operators";

import { UserService } from '../user/user.service';
import { environment } from "../../../environments/environment";

const apiURL = environment.API_URL;

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private http: HttpClient, private userServ: UserService) { }

	autenticar(uName: string, pwd: string) {
		return this.http
			.post(apiURL + "/user/login", {userName: uName, password: pwd}, {observe: "response"})
			.pipe(tap(res => {
				// passar {observe: "response"} no .post() para ter acesso aos headers
				const authToken: any = res.headers.get("x-access-token");
				this.userServ.setToken(authToken);
			}));
	}
}
