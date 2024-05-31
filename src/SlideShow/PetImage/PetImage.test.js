import { fireEvent, render, screen } from '@testing-library/react';
import PetImage from './PetImage';

test('should return image if receives image', () => {
    render(<PetImage imageURL={'test.jpg'} />);
    const petImage = screen.getByTestId('Pet Image');
    expect(petImage).toBeInTheDocument();
});

test('should return loading if no image received', () => {
    render(<PetImage />);
    const petImage = screen.getByText('Loading...');
    expect(petImage).toBeInTheDocument();
});

test('should return "no image available" if no image loads', () => {
    render(<PetImage imageURL={'noImageAvailable.jpg'} />);
    const image = screen.getByTestId('Pet Image');
    fireEvent.error(image);
    const noImageAvailableText = screen.getByTestId('No Image');
    expect(noImageAvailableText).toBeInTheDocument();
});
