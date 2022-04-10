import { render, screen, fireEvent } from '@testing-library/react';
import Toggle from '../../../components/inputs/Toggle';

describe('<Toggle />', () => {
  it('renders the component', () => {
    render(<Toggle checked={false} />);

    expect(screen.getByText('Use setting')).toBeInTheDocument()
  })

  it('passes `true` argment on change', () => {
    const handleChange = jest.fn();

    render(<Toggle checked={false} onChange={handleChange} />);

    fireEvent.click(screen.getByRole('switch'));

    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('passes `false` argment on change', () => {
    const handleChange = jest.fn();

    render(<Toggle checked={true} onChange={handleChange} />);

    fireEvent.click(screen.getByRole('switch'));

    expect(handleChange).toHaveBeenCalledWith(false);
  });
});
