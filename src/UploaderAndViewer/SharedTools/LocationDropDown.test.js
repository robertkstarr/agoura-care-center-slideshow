import LocationDropDown from "./LocationDropDown";
import {render, screen} from "@testing-library/react";
import {AGOURA, CASTAIC} from "../../Resources/LOCATIONS";
import userEvent from "@testing-library/user-event";
import {act} from "react-dom/test-utils";

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

test("Updates saved item correctly", () => {
    Storage.prototype.getItem = jest.fn(() => {
        return AGOURA;
    });
    render(<LocationDropDown setLocation={mockSetLocation}/>);

    jest.spyOn(Storage.prototype, "setItem");
    const location = screen.getByRole("combobox");

    act(() => {
        userEvent.type(location, CASTAIC + "{arrowdown}{enter}");
    });


    expect(localStorage.setItem).toHaveBeenCalledWith("location", CASTAIC);

});