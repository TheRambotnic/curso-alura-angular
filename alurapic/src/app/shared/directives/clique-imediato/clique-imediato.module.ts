import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CliqueImediatoDirective } from "./clique-imediato.directive";

@NgModule({
	declarations: [CliqueImediatoDirective],
	exports: [CliqueImediatoDirective],
	imports: [CommonModule]
})
export class CliqueImediatoModule {}