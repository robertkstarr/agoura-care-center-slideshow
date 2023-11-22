import {ageDisplay, capitalizeEveryWordOfString, weightDisplay} from "./DisplayTools";


test("capitalizes sentences correctly", () => {
    const unprocessedWord = "thIs Is a sENteNcE";

    expect(capitalizeEveryWordOfString(unprocessedWord)).toEqual("This Is A Sentence");
});

describe("age tests", () => {
    const createPetWithAge = (years, months) => {
        return {
            YEARS_OLD: years,
            MONTHS_OLD: months
        };
    };
    test("parses age correctly", () => {
        expect(ageDisplay(createPetWithAge("2", "7.00"))).toEqual("2 years 7 months");
    });

    test("parses age correctly less than 1 year", () => {
        expect(ageDisplay(createPetWithAge("0", "7.00"))).toEqual("7 months");
    });

    test("parses age correctly for 1 year", () => {
        expect(ageDisplay(createPetWithAge("1", "7.00"))).toEqual("1 year 7 months");
    });

    test("parses age correctly for 1 month", () => {
        expect(ageDisplay(createPetWithAge("2", "1.00"))).toEqual("2 years 1 month");
    });

    test("parses age correctly for 0 months", () => {
        expect(ageDisplay(createPetWithAge("3", "0.00"))).toEqual("3 years ");
    });
});

describe("weight tests", () => {
    test("parses typical weight response correctly", () => {
        expect(weightDisplay("7.62")).toEqual("7.62 lbs");
    });

    test("parses null weight correctly", () => {
        expect(weightDisplay(null)).toEqual("");
    });

    test("parses non-number weight correctly", () => {
        expect(weightDisplay("hello")).toEqual("");
    });

    test("parses zero weight correctly", () => {
        expect(weightDisplay("0.00")).toEqual("");
    });
});