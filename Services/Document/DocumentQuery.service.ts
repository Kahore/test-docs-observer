import {DocumentRepository} from "@/Data/repositories/Document";
import {DocumentMapper} from "@/Mappers/Document";
import {EDocument} from "@/Domain/Document/Entities";
import {Either, left, right} from "@/Data/utils";
import {DocumentSort, Sort} from "@/Services/Document/types";
import {orderBy} from "@/utils/Sort";


export class DocumentQueryService {
	constructor(
		private _documentRepository: DocumentRepository,
	){}

	public getSortedDocuments = async (props: DocumentSort): Promise<Either<Error, EDocument[]>> => {
		const dto = await this._documentRepository.getDocuments()
		if (dto.isRight()) {
			const entities = DocumentMapper.toEntity(dto.value)
			return right(this._getDocumentsSorted({entities, key:props.key, sortKey:props.order}, ))
		}
		// or here we can get a custom error
		return left(dto.value)
	}

	private _getDocumentsSorted({entities,key,sortKey}:{entities: EDocument[],key: keyof EDocument, sortKey: Sort}){
		return  entities.sort( orderBy( [key], [sortKey] ) );
	}
}
