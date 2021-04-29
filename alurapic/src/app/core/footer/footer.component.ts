import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { User } from "../user/user.interface";
import { UserService } from "../user/user.service";

@Component({
	selector: "ap-footer",
	templateUrl: "./footer.component.html"
})
export class FooterComponent implements OnInit {
	// propriedades com sufixo $ são Observables
	user$: Observable<User | null>;

	constructor(private userServ: UserService) {}

	ngOnInit(): void {
		this.user$ = this.userServ.getUser();
	}
}
