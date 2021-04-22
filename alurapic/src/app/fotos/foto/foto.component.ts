import { Component, Input } from "@angular/core";

const CLOUD = "http://localhost:3000/imgs/";

@Component({
	selector: "ap-foto",
	templateUrl: "./foto.component.html"
})
export class FotoComponent {
	private _url: string = "";

	// @Input() - permite receber parâmetros vindo do
	// seletor HTML
	@Input() descricao: string | undefined = "";
	@Input() set url(url: string | undefined) {
		if (!url?.startsWith("data")) {
			this._url = CLOUD + url;
		}
		else {
			this._url = url;
		}
	};

	get url() {
		return this._url;
	}
}
