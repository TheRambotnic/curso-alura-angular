import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import jwt_decode from "jwt-decode";

import { TokenService } from "../token/token-service";
import { User } from "./user.interface";

@Injectable({ providedIn: "root" })
export class UserService {
	userSubj = new BehaviorSubject<User | null>(null);
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
		this.userSubj.next(null);
	}

	estaLogado(): boolean {
		return this.tokenServ.temToken();
	}

	getUser(): Observable<User | null> {
		return this.userSubj.asObservable();
	}

	getUserName(): string {
		return this.username;
	}

	setToken(token: string): void {
		this.tokenServ.setToken(token);
		this.decodeAndNotify();
	}
}
