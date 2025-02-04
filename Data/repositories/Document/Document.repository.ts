import {ApiClient} from "@/Data/api";
import {DocumentResponse} from "@/Data/dto/Document";
import {Either} from "@/Data/utils";

export class DocumentRepository {
	public documents: DocumentResponse = [];

	constructor(
		private _apiClient: ApiClient,
		// here we can provide _errorHandler to isolate Crashlytics/Sentry or/and unauthorizedCallback in case of 401
	) {}

	public async getDocuments(): Promise<Either<Error, DocumentResponse>> {

		return await this._apiClient.get<DocumentResponse>(`/documents`).then((resp) =>
			resp
				.mapRight((dto) => {
					this.documents = dto;
					return dto;
				})
				.mapLeft((e) => {
					// and call it here -> this._errorHandler.handle(e);
					return e;
				}),
		);
	}
}
