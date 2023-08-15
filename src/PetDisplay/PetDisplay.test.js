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
    GetPetInfo.mockImplementation(() => Promise.resolve(testResponse));
    jest.spyOn(global.Math, "random").mockReturnValue(0);
});

afterEach(() => {
    jest.spyOn(global.Math, "random").mockRestore();
});

test("shows image", async () => {
    render(<PetDisplay/>);
    const petImage = await screen.findByAltText("Pet");
    expect(petImage).toBeInTheDocument();
});

test("shows correct name", async () => {
    render(<PetDisplay/>);
    const petName = await screen.findByText("Kyle");
    expect(petName).toBeInTheDocument();
});

test("shows new pet after 10 seconds", async () => {
    render(<PetDisplay/>);
    const petName = await screen.findByText("Kyle");
    const mathSpy =
        jest.spyOn(global.Math, "random").mockReturnValue(.99999);
    expect(petName).toBeInTheDocument();
    expect(mathSpy).toHaveBeenCalledTimes(1);
    await advanceTimersByNSeconds(11);
    expect(mathSpy).toHaveBeenCalledTimes(2);
    const newPetName = await screen.findByText("Charleston");
    expect(newPetName).toBeInTheDocument();
});

test("shows new pet on click", async () => {
    render(<PetDisplay/>);

    const petName = await screen.findByText("Kyle");
    const mathSpy =
        jest.spyOn(global.Math, "random").mockReturnValue(.99999);
    expect(petName).toBeInTheDocument();
    expect(mathSpy).toHaveBeenCalledTimes(1);
    const petImage = await screen.findByTestId("Pet Image");
    fireEvent.click(petImage);
    expect(mathSpy).toHaveBeenCalledTimes(2);
    const newPetName = await screen.findByText("Charleston");
    expect(newPetName).toBeInTheDocument();
});

test("resets timer after click", async () => {
    render(<PetDisplay/>);

    const petName = await screen.findByText("Kyle");
    const mathSpy =
        jest.spyOn(global.Math, "random").mockReturnValue(.99999);
    expect(petName).toBeInTheDocument();
    expect(mathSpy).toHaveBeenCalledTimes(1);
    const petImage = await screen.findByTestId("Pet Image");
    fireEvent.click(petImage);
    await advanceTimersByNSeconds(8);
    expect(mathSpy).toHaveBeenCalledTimes(2);
    const newPetName = await screen.findByText("Charleston");
    expect(newPetName).toBeInTheDocument();
});

test("advances pet 10 seconds after click", async () => {
    render(<PetDisplay/>);

    const petName = await screen.findByText("Kyle");

    const mathSpy =
        jest.spyOn(global.Math, "random").mockReturnValue(.99999);

    expect(petName).toBeInTheDocument();
    expect(mathSpy).toHaveBeenCalledTimes(1);

    const petImage = screen.getByTestId("Pet Image");
    fireEvent.click(petImage);
    await advanceTimersByNSeconds(8);

    expect(mathSpy).toHaveBeenCalledTimes(2);
    const newPetName = await screen.findByText("Charleston");
    expect(newPetName).toBeInTheDocument();

    jest.spyOn(global.Math, "random").mockReturnValue(0);
    await advanceTimersByNSeconds(3);
    const originalPetName = await screen.findByText("Kyle");
    expect(originalPetName).toBeInTheDocument();
    expect(mathSpy).toHaveBeenCalledTimes(3);
});

test("reloads page every 24 hours", async () => {
    render(<PetDisplay/>);
    const original = window.location;

    Object.defineProperty(window, "location", {
        configurable: true,
        value: {reload: jest.fn()},
    });

    expect(window.location.reload).not.toHaveBeenCalled();
    await act(async () => {
        jest.advanceTimersByTime(60 * 60 * 24 * 1000);
    });
    expect(window.location.reload).toHaveBeenCalledTimes(1);

    Object.defineProperty(window, "location", {configurable: true, value: original});

});

test("getpetinfo should only be called once", async () => {
    render(<PetDisplay/>);
    await advanceTimersByNSeconds(40);
    expect(GetPetInfo).toHaveBeenCalledTimes(1);
});