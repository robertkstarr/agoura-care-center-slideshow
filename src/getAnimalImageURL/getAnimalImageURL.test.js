import {getAnimalImageURL} from "./getAnimalImageURL";

test('retrieves pet image', () => {
    const petUrl = getAnimalImageURL();
    expect(petUrl).not.toBe(null);
})
