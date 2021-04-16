import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { User } from "../user/user.interface";
import { UserService } from "../user/user.service";

@Component({
	selector: "ap-header",
	templateUrl: "./header.component.html"
})
export class HeaderComponent {
	user$: Observable<User>;

	constructor(private userServ: UserService, private router: Router) {
		this.user$ = this.userServ.getUser();
	}

	logout() {
		this.userServ.logout();
		this.router.navigate([""]);
	}
}
