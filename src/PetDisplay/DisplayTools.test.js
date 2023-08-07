import {ageDisplay, capitalizeEveryWordOfString} from "./DisplayTools";

test('capitalizes sentences correctly', () => {
    const unprocessedWord = "thIs Is a sENteNcE";

    expect(capitalizeEveryWordOfString(unprocessedWord)).toEqual("This Is A Sentence");
})

test("parses age correctly", () => {
    expect(ageDisplay("2", "7.00")).toEqual("2 years 7 months");
})

test("parses age correctly less than 1 year", () => {
    expect(ageDisplay("0", "7.00")).toEqual("7 months");
})

test("parses age correctly for 1 year", () => {
    expect(ageDisplay("1", "7.00")).toEqual("1 year 7 months");
})

test("parses age correctly for 1 month", () => {
    expect(ageDisplay("2", "1.00")).toEqual("2 years 1 month");
})

test("parses age correctly for 0 months", () => {
    expect(ageDisplay("3", "0.00")).toEqual("3 years ");
})