import {DocumentResponse} from "@/Data/dto/Document";
import {ContributorMapper} from "@/Mappers/Contributor";
import {EDocument} from "@/Domain/Document/Entities";

export class DocumentMapper {
	static toEntity(dto:DocumentResponse) {
		return dto.map(document=> {
			  const contributors = ContributorMapper.toEntity(document.Contributors)
			  return new EDocument({...document, contributors})
		})
	}
}
