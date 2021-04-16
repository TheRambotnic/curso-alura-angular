import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import jwt_decode from "jwt-decode";

import { TokenService } from "../token/token-service";
import { User } from "./user.interface";

@Injectable({
	providedIn: "root"
})
export class UserService {
	userReset: User = {
		id: -1,
		name: "",
		email: ""
	};

	userSubj = new BehaviorSubject<User>(this.userReset);
	username: string;

	constructor(private tokenServ: TokenService) {
		this.tokenServ.temToken() && this.decodeAndNotify();
	}

	private decodeAndNotify(): void {
		const token: any = this.tokenServ.getToken();
		const user = jwt_decode(token) as User;
		this.userSubj.next(user);
		this.username = user.name;
	}

	logout(): void {
		this.tokenServ.removerToken();
		this.userSubj.next(this.userReset);
	}

	estaLogado(): boolean {
		return this.tokenServ.temToken();
	}

	getUser(): Observable<User> {
		return this.userSubj.asObservable();
	}

	getUserName() {
		return this.username;
	}

	setToken(token: string): void {
		this.tokenServ.setToken(token);
		this.decodeAndNotify();
	}
}
