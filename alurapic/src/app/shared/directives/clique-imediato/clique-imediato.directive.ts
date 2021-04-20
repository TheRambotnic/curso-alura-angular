import { Directive, ElementRef, OnInit } from "@angular/core";
import { PlatformDetectorService } from "src/app/core/platform-detector/platform-detector.service";

@Directive({
	selector: "[cliqueImediato]"
})
export class CliqueImediatoDirective implements OnInit {
	constructor(private elem: ElementRef<any>, private platformDetector: PlatformDetectorService) {	}

	ngOnInit(): void {
		this.platformDetector.naPlataformaBrowser() && this.elem.nativeElement.click();
	}
}
