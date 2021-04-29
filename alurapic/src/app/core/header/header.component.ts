import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { User } from "../user/user.interface";
import { UserService } from "../user/user.service";

@Component({
	selector: "ap-header",
	templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit {
	// propriedades com sufixo $ são Observables
	user$: Observable<User | null>;

	constructor(private userServ: UserService, private router: Router) {}

	ngOnInit(): void {
		this.user$ = this.userServ.getUser();
	}

	logout() {
		this.userServ.logout();
		this.router.navigate([""]);
	}
}
