import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiURL = "http://localhost:3000";

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private http: HttpClient) { }

	autenticar(uName: string, pwd: string) {
		return this.http.post(apiURL + "/user/login", {userName: uName, password: pwd});
	}
}
