import GetDropDownAnimals from "../SharedTools/GetDropDownAnimals";
import FilterAnimalsWithAvailablePictures from "./FilterAnimalsWithAvailablePictures";
import IDAvailable from "./IDAvailable";

jest.mock("../SharedTools/GetDropDownAnimals");
jest.mock("./IDAvailable");

const animals = [{ANIMAL_ID: "1"}, {ANIMAL_ID: "2"}];

beforeEach(() => {
    GetDropDownAnimals.mockResolvedValue(
        animals
    );

    IDAvailable.mockResolvedValue(true);
});

test("filter loads", async () => {

    expect(await FilterAnimalsWithAvailablePictures()).toEqual(animals);

});