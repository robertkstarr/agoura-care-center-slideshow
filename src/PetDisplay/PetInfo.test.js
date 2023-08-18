import {render, screen} from "@testing-library/react";
import PetInfo from "./PetInfo";

const defaultPet = {
    ANIMAL_ID: "animalID",
    SEX: "Female",
    BREED: "Pet Breed",
    YEARS_OLD: "10",
    MONTHS_OLD: "3",
    WEIGHT: "3.20"
};

test("shows id", async () => {
    render(<PetInfo pet={defaultPet}/>);
    const petWeight = await screen.findByTestId("ID Display");
    expect(petWeight).toHaveTextContent("animalID");
});

test("shows sex", async () => {
    render(<PetInfo pet={defaultPet}/>);
    const petWeight = await screen.findByTestId("Sex Display");
    expect(petWeight).toHaveTextContent("SEX: Female");
});

test("shows age", async () => {
    render(<PetInfo pet={defaultPet}/>);
    const petWeight = await screen.findByTestId("Age Display");
    expect(petWeight).toHaveTextContent("AGE: 10 years 3 months");
});

test("shows breed", async () => {
    render(<PetInfo pet={defaultPet}/>);
    const petWeight = await screen.findByTestId("Breed Display");
    expect(petWeight).toHaveTextContent("BREED: Pet Breed");
});

test("shows weight", async () => {
    render(<PetInfo pet={defaultPet}/>);
    const petWeight = await screen.findByTestId("Weight Display");
    expect(petWeight).toHaveTextContent("WEIGHT: 3.2 lbs");
});
