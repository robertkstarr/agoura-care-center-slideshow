import LocationDropDown from "./LocationDropDown";
import {fireEvent, render, screen} from "@testing-library/react";
import {AGOURA, CASTAIC} from "../../Resources/LOCATIONS";

const mockSetLocation = jest.fn();

beforeEach(() => {
    jest.clearAllMocks();
});
test("No location on first load", async () => {
    render(<LocationDropDown setLocation={mockSetLocation}/>);

    const location = await screen.getByRole("combobox");

    expect(location.getAttribute("Value")).toBe("");
});

test("Loads saved item correctly", async () => {
    Storage.prototype.getItem = jest.fn(() => {
        return AGOURA;
    });
    render(<LocationDropDown setLocation={mockSetLocation}/>);

    const location = await screen.getByRole("combobox");

    expect(location).toHaveValue(AGOURA);
});

test("Updates saved item correctly", async () => {
    Storage.prototype.getItem = jest.fn(() => {
        return AGOURA;
    });
    render(<LocationDropDown setLocation={mockSetLocation}/>);

    const mockSetItem = jest.fn();
    Storage.prototype.setItem = mockSetItem;
    const location = screen.getByRole("combobox");
    location.focus();
    fireEvent.change(location, {target: {value: CASTAIC}});
    await expect(location).toHaveValue(CASTAIC);
    await expect(mockSetItem).toHaveBeenCalledTimes(4);
});