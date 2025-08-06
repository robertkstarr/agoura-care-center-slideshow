import { render, screen } from '@testing-library/react';
import PetInfo from './PetInfo';

describe('shows info when there', () => {
    const defaultPet = {
        animalId: 'animalID',
        SEX: 'Female',
        BREED: 'Pet Breed',
        YEARS_OLD: '10',
        MONTHS_OLD: '3',
        WEIGHT: '3.20',
    };

    test('shows id', async () => {
        render(<PetInfo pet={defaultPet} />);
        const petWeight = await screen.findByTestId('ID Display');
        expect(petWeight).toHaveTextContent('animalID');
    });

    test('shows sex', async () => {
        render(<PetInfo pet={defaultPet} />);
        const petWeight = await screen.findByTestId('Sex Display');
        expect(petWeight).toHaveTextContent('Sex: Female');
    });

    test('shows age', async () => {
        render(<PetInfo pet={defaultPet} />);
        const petWeight = await screen.findByTestId('Age Display');
        expect(petWeight).toHaveTextContent('Age: 10 years 3 months');
    });

    test('shows breed', async () => {
        render(<PetInfo pet={defaultPet} />);
        const petWeight = await screen.findByTestId('Breed Display');
        expect(petWeight).toHaveTextContent('Breed: Pet Breed');
    });

    test('shows weight', async () => {
        render(<PetInfo pet={defaultPet} />);
        const petWeight = await screen.findByTestId('Weight Display');
        expect(petWeight).toHaveTextContent('Weight: 3.2 lbs');
    });
});

describe('does not show info if not there', () => {
    const emptyPet = {
        animalId: 'animalID',
        SEX: 'N/A',
        BREED: 'Pet Breed',
        YEARS_OLD: '0',
        MONTHS_OLD: '0',
        WEIGHT: '0',
    };

    test('does not show sex if no sex', () => {
        render(<PetInfo pet={emptyPet} />);
        const petSex = screen.queryByTestId('Sex Display');
        expect(petSex).not.toBeInTheDocument();
    });

    test('does not show age if no age', () => {
        render(<PetInfo pet={emptyPet} />);
        const petAge = screen.queryByTestId('Age Display');
        expect(petAge).not.toBeInTheDocument();
    });

    test('does not show weight if no weight', () => {
        render(<PetInfo pet={emptyPet} />);
        const petWeight = screen.queryByTestId('Weight Display');
        expect(petWeight).not.toBeInTheDocument();
    });
});
