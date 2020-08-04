import getData from "./getData";

describe("getData reducer", () => {
	it("should return the initial state", () => {
		expect(getData(undefined, {})).toEqual(
			{
				randomMeals: [],
				allSearchButtons: [],
				toggleResults: false
			}
		);
	});
});