import {render, screen} from '@testing-library/react';
import App from './App';

test('shows pet image', () => {
    render(<App/>);
    const petImage = screen.getByAltText("Pet");
    expect(petImage).toBeInTheDocument();
})
