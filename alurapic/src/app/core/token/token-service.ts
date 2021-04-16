import { Injectable } from "@angular/core";

const KEY = "authToken"

@Injectable({
	providedIn: "root"
})
export class TokenService {
	temToken(): boolean {
		return !!this.getToken();
	}

	setToken(token: string) {
		window.localStorage.setItem(KEY, token);
	}

	getToken() {
		return window.localStorage.getItem(KEY);
	}

	removerToken() {
		window.localStorage.removeItem(KEY);
	}
}
