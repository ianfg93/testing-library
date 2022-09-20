import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se são exibidos todos os cards de pokémons favoritados.', () => {
  renderWithRouter(<App />);
  const headingH2 = screen.getByRole('heading', {
    name: 'Encountered pokémons', level: 2 });
  const button = screen.getByRole('button', { name: 'Próximo pokémon' });
  const buttonAll = screen.getByRole('button', { name: 'All' });
  userEvent.click(buttonAll);
  const buttonElectric = screen.getByRole('button', { name: 'Electric' });
  const buttonFire = screen.getByRole('button', { name: 'Fire' });
  const buttonBug = screen.getByRole('button', { name: 'Bug' });
  const buttonPoison = screen.getByRole('button', { name: 'Poison' });
  const buttonPsychic = screen.getByRole('button', { name: 'Psychic' });
  const buttonNormal = screen.getByRole('button', { name: 'Normal' });
  const buttonDragon = screen.getByRole('button', { name: 'Dragon' });
  const buttons = screen.getAllByTestId('pokemon-type-button');

  expect(headingH2).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(buttonAll).toBeInTheDocument();
  expect(buttonElectric).toBeInTheDocument();
  expect(buttonFire).toBeInTheDocument();
  expect(buttonBug).toBeInTheDocument();
  expect(buttonPoison).toBeInTheDocument();
  expect(buttonPsychic).toBeInTheDocument();
  expect(buttonNormal).toBeInTheDocument();
  expect(buttonDragon).toBeInTheDocument();
  expect(buttons[0]).toHaveAttribute('data-testid', 'pokemon-type-button');
});
