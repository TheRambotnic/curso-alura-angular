import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";
import { UserService } from "src/app/core/user/user.service";

@Directive({
	selector: "[mostrarSeLogado]"
})
export class MostrarSeLogadoDirective implements OnInit {
	constructor(
		private elem: ElementRef<any>,
		private render: Renderer2,
		private userServ: UserService
	) { }

	ngOnInit(): void {
		if (!this.userServ.estaLogado()) {
			this.render.setStyle(this.elem.nativeElement, "display", "none");
		}
	}
}
