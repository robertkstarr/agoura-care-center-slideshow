import getAnimalImageURL from "./getAnimalImageURL";
import {getDownloadURL, ref} from "firebase/storage";
import loadingGif from "../../Images/loadingDial.gif";

jest.mock("firebase/storage");

const MOCK_URL = "https://wwww.fake-image.com";
const MOCK_THUMBNAIL_URL = "https://www.thumbnail-image.com";
const SAVED_URL = "https://www.saved-url.com";

const THUMBNAIL_REFERENCE = "thumbnail";
const NO_THUMBNAIL_REFERENCE = "no thumbnail";
beforeEach(() => {
    ref.mockImplementation((storage, url) => {
        if (url.includes("/Thumbnails/")) {
            return THUMBNAIL_REFERENCE;
        } else return NO_THUMBNAIL_REFERENCE;
    });

    getDownloadURL.mockImplementation((result) => {
        if (result === THUMBNAIL_REFERENCE) {
            return MOCK_THUMBNAIL_URL;
        } else if (result === NO_THUMBNAIL_REFERENCE) {
            return MOCK_URL;
        } else return "Error";
    });
});

test("animal image returns blank string with no input", async () => {
    expect(await getAnimalImageURL({})).toEqual("");
});

test("returns loading gif as thumbnail if no way to fetch thumbnail", async () => {
    expect(await getAnimalImageURL({}, true)).toEqual(loadingGif);
});

test("returns loading gif as thumbnail if no filename", async () => {
    expect(await getAnimalImageURL({animalId: "1"}, true)).toEqual(loadingGif);
});

test("returns loading gif as thumbnail if no animalId", async () => {
    expect(await getAnimalImageURL({fileName: "test.jpg"}, true)).toEqual(loadingGif);
});

test("returns thumbnail with filename and animalId", async () => {
    expect(await getAnimalImageURL({fileName: "test.jpg", animalId: "1"}, true))
        .toEqual(MOCK_THUMBNAIL_URL);
});

test("returns image with filename and animalId", async () => {
    expect(await getAnimalImageURL({fileName: "test.jpg", animalId: "1"}, false))
        .toEqual(MOCK_URL);
});

test("returns image with filename and animalId and image url", async () => {
    expect(await getAnimalImageURL({fileName: "test.jpg", animalId: "1", url: SAVED_URL}))
        .toEqual(MOCK_URL);
});

test("returns image url with only image url", async () => {
    expect(await getAnimalImageURL({url: SAVED_URL}))
        .toEqual(SAVED_URL);
});