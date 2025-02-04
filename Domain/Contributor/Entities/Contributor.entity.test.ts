import {EContributor} from "@/Domain/Contributor/Entities/Contributor.entity";

const MOCK_1 = {ID:"1b41861e-51e2-4bf4-ba13-b20f01ce81ef",	 "Name": "Jasen Crona"}

describe('Domain/Contributor EContributor', () => {
	it('EContributor:: should initialize with correct properties', () => {

		const contributor = new EContributor(MOCK_1);
		expect(contributor.id).toBe(MOCK_1.ID);
		expect(contributor.name).toBe(MOCK_1.Name);
	});
});
