import PetDisplay from "./PetDisplay";
import {render, screen} from "@testing-library/react";
import {GetPetInfo} from "../GetPetInfo/GetPetInfo";
import testResponse from "../Resources/testResponse.json";

jest.mock("../GetPetInfo/GetPetInfo");
test("shows image", () => {
    GetPetInfo.mockImplementation(() => {
        const returnPetObject = testResponse;
        return returnPetObject;
    });

    render(<PetDisplay/>);
    const petImage = screen.getByAltText("Pet");
    expect(petImage).toBeInTheDocument();
});