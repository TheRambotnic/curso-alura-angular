import { Component, Input } from "@angular/core";

@Component({
	selector: "ap-foto",
	templateUrl: "./foto.component.html"
})
export class FotoComponent {
	// @Input() - permite receber parâmetros vindo do
	// seletor HTML
	@Input() url = "";
	@Input() descricao = "";
}
