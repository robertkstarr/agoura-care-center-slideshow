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
    render(<PetDisplay/>);
});

afterEach(() => {
    jest.spyOn(global.Math, "random").mockRestore();
});

test("shows image", () => {
    const petImage = screen.getByAltText("Pet");
    expect(petImage).toBeInTheDocument();
});

test("shows correct name", () => {
    const petName = screen.getByText("Kyle");
    expect(petName).toBeInTheDocument();
});

test("shows new pet after 10 seconds", async () => {
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

test("resets timer after click", async () => {
    const mathSpy =
        jest.spyOn(global.Math, "random").mockReturnValue(.99999);
    const petName = screen.getByText("Kyle");
    expect(petName).toBeInTheDocument();
    expect(mathSpy).toHaveBeenCalledTimes(1);
    const petImage = screen.getByTestId("Pet Image");
    fireEvent.click(petImage);
    await advanceTimersByNSeconds(8);
    expect(mathSpy).toHaveBeenCalledTimes(2);
    const newPetName = screen.getByText("Charleston");
    expect(newPetName).toBeInTheDocument();
});

test("advances pet 10 seconds after click", async () => {
    const mathSpy =
        jest.spyOn(global.Math, "random").mockReturnValue(.99999);
    const petName = screen.getByText("Kyle");
    expect(petName).toBeInTheDocument();
    expect(mathSpy).toHaveBeenCalledTimes(1);

    const petImage = screen.getByTestId("Pet Image");
    fireEvent.click(petImage);
    await advanceTimersByNSeconds(8);

    expect(mathSpy).toHaveBeenCalledTimes(2);
    const newPetName = screen.getByText("Charleston");
    expect(newPetName).toBeInTheDocument();

    jest.spyOn(global.Math, "random").mockReturnValue(0);
    await advanceTimersByNSeconds(3);
    const originalPetName = screen.getByText("Kyle");
    expect(originalPetName).toBeInTheDocument();
    expect(mathSpy).toHaveBeenCalledTimes(3);
});