import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";
import { UserService } from "src/app/core/user/user.service";
import { Foto } from "../../foto/foto.interface";

@Directive({
	selector: "[fotoDonoApenas]"
})
export class FotoDonoApenasDirective implements OnInit {
	@Input() foto: Foto;

	constructor(
		private elem: ElementRef<any>,
		private render: Renderer2,
		private userServ: UserService
	) {}

	ngOnInit(): void {
		this.userServ.getUser().subscribe(user => {
			if (!user || user.id != this.foto.userId) {
				this.render.setStyle(this.elem.nativeElement, "display", "none");
			}
		});
	}
}
