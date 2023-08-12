import PetDisplay from "./PetDisplay";
import {fireEvent, render, screen} from "@testing-library/react";
import {GetPetInfo} from "../GetPetInfo/GetPetInfo";
import testResponse from "../Resources/testResponse.json";
import {act} from "react-dom/test-utils";

jest.mock("../GetPetInfo/GetPetInfo");
jest.useFakeTimers();

async function advanceTimersByNSeconds(seconds) {
    for (let i = 0; i < seconds; i++) {
        await act(async () => {
            jest.advanceTimersByTime(1000);
        });
    }
}

beforeEach(() => {
    GetPetInfo.mockImplementation(() => {
        const returnPetObject = testResponse;
        return returnPetObject;
    });
    jest.spyOn(global.Math, "random").mockReturnValue(0);
});

afterEach(() => {
    jest.spyOn(global.Math, "random").mockRestore();
});

test("shows image", () => {
    render(<PetDisplay/>);
    const petImage = screen.getByAltText("Pet");
    expect(petImage).toBeInTheDocument();
});

test("shows correct name", () => {
    render(<PetDisplay/>);
    const petName = screen.getByText("Kyle");
    expect(petName).toBeInTheDocument();
});

test("shows new pet after 10 seconds", async () => {
    render(<PetDisplay/>);
    const mathSpy =
        jest.spyOn(global.Math, "random").mockReturnValue(.99999);
    const petName = screen.getByText("Kyle");
    expect(petName).toBeInTheDocument();
    expect(mathSpy).toHaveBeenCalledTimes(1);
    await advanceTimersByNSeconds(11);
    expect(mathSpy).toHaveBeenCalledTimes(3);
    const newPetName = screen.getByText("Charleston");
    expect(newPetName).toBeInTheDocument();
});

test("shows new pet on click", () => {
    render(<PetDisplay/>);
    const mathSpy =
        jest.spyOn(global.Math, "random").mockReturnValue(.99999);
    const petName = screen.getByText("Kyle");
    expect(petName).toBeInTheDocument();
    expect(mathSpy).toHaveBeenCalledTimes(1);
    const petImage = screen.getByTestId("Pet Image");
    fireEvent.click(petImage);
    expect(mathSpy).toHaveBeenCalledTimes(2);
    const newPetName = screen.getByText("Charleston");
    expect(newPetName).toBeInTheDocument();
});