import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";
import { UserService } from "src/app/core/user/user.service";

@Directive({
	selector: "[mostrarSeLogado]"
})
export class MostrarSeLogadoDirective implements OnInit {
	displayAtual: string;

	constructor(
		private elem: ElementRef<any>,
		private render: Renderer2,
		private userServ: UserService
	) { }

	ngOnInit(): void {
		this.displayAtual = getComputedStyle(this.elem.nativeElement).display;
		this.userServ.getUser().subscribe(user => {
			if (user) {
				this.render.setStyle(this.elem.nativeElement, "display", this.displayAtual);
			}
			else {
				this.displayAtual = getComputedStyle(this.elem.nativeElement).display;
				this.render.setStyle(this.elem.nativeElement, "display", "none");
			}
		});
	}
}
