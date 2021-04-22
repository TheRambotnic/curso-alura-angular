import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FotoComentario } from "./foto-comentarios";
import { Foto } from "./foto.interface";

const apiURL = "http://localhost:3000";

// previne o erro de 'No providers for Service'
@Injectable({
	providedIn: "root" // 'root' - qualquer componente da minha app terá esse serviço disponível
})
export class FotoService {
	constructor(private http: HttpClient) { }

	listarDeUsuario(username: string) {
		return this.http.get<Foto[]>(`${apiURL}/${username}/photos`);
	}

	listarDeUsuarioPaginada(username: string, pagina: number) {
		const parametros = new HttpParams().append("page", pagina.toString());
		return this.http.get<Foto[]>(`${apiURL}/${username}/photos`, { params: parametros });
	}

	enviarFoto(descricao: string, permitirComentarios: boolean, arquivo: File) {
		const formData = new FormData();
		formData.append("description", descricao);
		formData.append("allowComments", permitirComentarios ? "true" : "false"); // converter bool para string
		formData.append("imageFile", arquivo);

		return this.http.post(`${apiURL}/photos/upload`, formData);
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
}
