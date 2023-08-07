import {capitalizeEveryWordOfString} from "./DisplayTools";

test('capitalizes sentences correctly', () => {
    const unprocessedWord = "thIs Is a sENteNcE";

    expect(capitalizeEveryWordOfString(unprocessedWord)).toEqual("This Is A Sentence");
})
