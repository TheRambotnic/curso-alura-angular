import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
	// declarar seletor entre [] para usá-lo como um atributo de tag HTML
	selector: "[apEscurecerHover]"
})
export class EscurecerHoverDirective {
	@Input() brightness = "70%";

	constructor(
		private elem: ElementRef, // ElementRef - retorna referência de elemento do DOM
		private render: Renderer2
	) { }

	@HostListener("mouseover")
	escurecerOn(): void {
		this.render.setStyle(this.elem.nativeElement, "filter", `brightness(${this.brightness})`);
	}

	@HostListener("mouseleave")
	escurecerOff(): void {
		this.render.setStyle(this.elem.nativeElement, "filter", "brightness(100%)");
	}
}
