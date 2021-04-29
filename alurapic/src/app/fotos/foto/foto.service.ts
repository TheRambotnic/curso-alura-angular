import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { FotoComentario } from "./foto-comentarios";
import { Foto } from "./foto.interface";
import { environment } from "../../../environments/environment";

const apiURL = environment.API_URL;

@Injectable({ providedIn: "root" })
export class FotoService {
	constructor(private http: HttpClient) { }

	listarDeUsuario(username: string) {
		return this.http.get<Foto[]>(`${apiURL}/${username}/photos`);
	}

	listarDeUsuarioPaginada(username: string, pagina: number) {
		const parametros = new HttpParams().append("page", pagina.toString());
		return this.http.get<Foto[]>(`${apiURL}/${username}/photosx`, { params: parametros });
	}

	enviarFoto(descricao: string, permitirComentarios: boolean, arquivo: File) {
		const formData = new FormData();
		formData.append("description", descricao);
		formData.append("allowComments", permitirComentarios ? "true" : "false"); // converter bool para string
		formData.append("imageFile", arquivo);

		return this.http.post(
			`${apiURL}/photos/upload`,
			formData,
			{
				observe: "events",
				reportProgress: true
			}
		);
	}

	removerFoto(fotoId: number) {
		return this.http.delete(`${apiURL}/photos/${fotoId}`);
	}

	listarPorId(fotoId: number) {
		return this.http.get<Foto>(`${apiURL}/photos/${fotoId}`);
	}

	listarComentarios(fotoId: number) {
		return this.http.get<FotoComentario[]>(`${apiURL}/photos/${fotoId}/comments`);
	}

	adicionarComentario(fotoId: number, texto: string) {
		return this.http.post(`${apiURL}/photos/${fotoId}/comments`, {commentText: texto});
	}

	curtirFoto(fotoId: number) {
		return this.http
			.post(`${apiURL}/photos/${fotoId}/like`, {}, {observe: "response"})
			.pipe(map(res => true))
			.pipe(catchError(err => {
				// of() - cria um novo Observable
				return err.status == "304" ? of(false) : throwError(err);
			}));
	}
}
