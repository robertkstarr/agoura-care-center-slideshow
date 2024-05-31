import GetDropDownAnimals from '../SharedTools/GetDropDownAnimals';
import FilterAnimalsWithAvailablePictures from './FilterAnimalsWithAvailablePictures';
import IDAvailable from './IDAvailable';

jest.mock('../SharedTools/GetDropDownAnimals');
jest.mock('./IDAvailable');

const animal1 = { ANIMAL_ID: '1' };
const animal2 = { ANIMAL_ID: '2' };
const animals = [animal1, animal2];

beforeEach(() => {
    GetDropDownAnimals.mockResolvedValue(animals);

    IDAvailable.mockResolvedValue(true);
});

test('filter loads', async () => {
    expect(await FilterAnimalsWithAvailablePictures()).toEqual(animals);
});

test('filter only shows animals with ID Available', async () => {
    IDAvailable.mockImplementation((value) => {
        if (value === '1') return true;
        return false;
    });

    expect(await FilterAnimalsWithAvailablePictures()).toEqual([animal1]);
});
