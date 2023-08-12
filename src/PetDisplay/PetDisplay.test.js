import PetDisplay from "./PetDisplay";
import {render, screen} from "@testing-library/react";
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
    const petName = screen.getByText("Kyle");
    expect(petName).toBeInTheDocument();
    jest.spyOn(global.Math, "random").mockReturnValue(.999999);

    await advanceTimersByNSeconds(11);
    const newPetName = screen.getByText("Charleston");
    expect(newPetName).toBeInTheDocument();
});