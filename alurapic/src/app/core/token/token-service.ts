import { Injectable } from "@angular/core";

const KEY = "authToken"

@Injectable({ providedIn: "root" })
export class TokenService {
	temToken(): boolean {
		// double bang (!!) - boolean casting
		return !!this.getToken();
	}

	setToken(token: string): void {
		window.localStorage.setItem(KEY, token);
	}

	getToken() {
		return window.localStorage.getItem(KEY);
	}

	removerToken(): void {
		window.localStorage.removeItem(KEY);
	}
}
