import {DocumentItemContributor} from "@/Data/dto/Document";
import {EContributor} from "@/Domain/Contributor/Entities";

export class ContributorMapper {
	static toEntity(dto:DocumentItemContributor[]) {
		return dto.map(contributor=> new EContributor(contributor));
	}
}
