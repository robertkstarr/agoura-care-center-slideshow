import {getAnimalImageURL} from "./GetAnimalImageURL";

test('retrieves pet image', () => {
    const petUrl = getAnimalImageURL();
    expect(petUrl).not.toBe(null);
})
