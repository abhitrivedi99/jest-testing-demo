import { getStringInfo, toUpperCase } from '../app/Utils';

describe('Utils test suite', () => {
	it('should return uppercase of strng value', () => {
		// Arrange:
		const sut = toUpperCase;
		const expected = 'DEMO';

		// Act:
		const actual = sut('demo');

		// Assert:
		expect(actual).toBe(expected);
	});

	describe('toUpperCase examples', () => {
		it.each([
			{ input: 'demo', expected: 'DEMO' },
			{ input: 'abc', expected: 'ABC' },
			{ input: 'def', expected: 'DEF' },
		])('$input toUpperCase should be $expected', ({ input, expected }) => {
			const sut = toUpperCase;
			const actual = sut(input);
			expect(actual).toBe(expected);
		});
	});

	describe('getStringInfo for arg demo should', () => {
		const sut = getStringInfo;
		const actual = sut('demo');

		test('return right length', () => {
			expect(actual.characters.length).toBe(4);
		});

		test('return right lower case', () => {
			expect(actual.lowercase).toBe('demo');
		});

		test('return right upper case', () => {
			expect(actual.uppercase).toBe('DEMO');
		});

		test('return right response', () => {
			const expected = {
				lowercase: 'demo',
				uppercase: 'DEMO',
				length: 4,
				characters: ['d', 'e', 'm', 'o'],
				extraInfo: {},
			};
			expect(actual).toEqual(expected);
		});

		test('return right characters of array', () => {
			expect(actual.characters).toEqual(['d', 'e', 'm', 'o']);
		});

		test('return right character containing in array', () => {
			expect(actual.characters).toContain<string>('d');
		});

		test('return right substring in characters array', () => {
			expect(actual.characters).toEqual(expect.arrayContaining(['e', 'm']));
		});

		test('return right type of extraInfo', () => {
			expect(actual.extraInfo).not.toBe(undefined);
			expect(actual.extraInfo).not.toBeUndefined();
			expect(actual.extraInfo).toBeDefined();
			expect(actual.extraInfo).toBeTruthy();
		});
	});
});
