import { Pipe, PipeTransform } from "@angular/core";
import { Foto } from "../foto/foto.interface";

@Pipe({	name: "filtrarPorDescricao" })
export class FiltrarPorDescricaoPipe implements PipeTransform {
	transform(fotos: Foto[], descricaoQuery: string) {
		descricaoQuery = descricaoQuery.trim().toLowerCase();

		if (descricaoQuery) {
			return fotos.filter(foto => 
				foto.description.toLowerCase().includes(descricaoQuery)
			);
		}
		else {
			return fotos;
		}
	}
}
