import {DocumentItemContributor} from "@/Data/dto/Document";
import {ContributorMapper} from "@/Mappers/Contributor/Contributor.mapper";
import {EContributor} from "@/Domain/Contributor/Entities";

const MOCK_1: DocumentItemContributor[] = [{ID:"1b41861e-51e2-4bf4-ba13-b20f01ce81ef",	 "Name": "Jasen Crona"}]

describe('Mappers/Contributor ContributorMapper', () => {
	it('ContributorMapper:: should map data correctly ', () => {
		const result = ContributorMapper.toEntity(MOCK_1);

		expect(result[0]).toEqual(new EContributor(MOCK_1[0]));
	});
})
