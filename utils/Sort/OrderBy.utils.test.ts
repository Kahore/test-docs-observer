import { orderBy } from './OrderBy.utils';

const MOCK_1 = [
	{ id: 3, name: 'Charlie', age: 25 },
	{ id: 1, name: 'Alice', age: 30 },
	{ id: 2, name: 'Bob', age: 22 }
];

describe('utils/Sort OrderBy', () => {

	it('should sort by a single key in ascending order', () => {
		const sorted = [...MOCK_1].sort(orderBy(['id'], ['asc']));
		expect(sorted).toEqual([
			{ id: 1, name: 'Alice', age: 30 },
			{ id: 2, name: 'Bob', age: 22 },
			{ id: 3, name: 'Charlie', age: 25 }
		]);
	});

	it('should sort by a single key in descending order', () => {
		const sorted = [...MOCK_1].sort(orderBy(['id'], ['desc']));
		expect(sorted).toEqual([
			{ id: 3, name: 'Charlie', age: 25 },
			{ id: 2, name: 'Bob', age: 22 },
			{ id: 1, name: 'Alice', age: 30 }
		]);
	});

	it('should sort by multiple keys (id ascending, age descending)', () => {

		const sorted = [...MOCK_1].sort(orderBy(['id', 'age'], ['asc', 'desc']));
		expect(sorted).toEqual([
			{ age: 30, id: 1, name: "Alice" },
			{ age: 22, id: 2, name: "Bob" },
			{ age: 25, id: 3,  name: "Charlie" }
		]);
	});

	it('should handle an empty array', () => {
		const sorted = [].sort(orderBy(['id'], ['asc']));
		expect(sorted).toEqual([]);
	});

	it('should handle an array with one element', () => {
		const single = [{ id: 1, name: 'Alice', age: 30 }];
		const sorted = [...single].sort(orderBy(['id'], ['asc']));
		expect(sorted).toEqual(single);
	});
});
