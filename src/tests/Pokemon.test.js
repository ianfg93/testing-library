import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('A imagem do pokemon possui:', () => {
  renderWithRouter(<App />);
  const image = screen.getByRole('img', { name: 'Pikachu sprite' });

  expect(image.src).toContain('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
});

test('A imagem de favorito possui :', () => {
  renderWithRouter(<App />);
  const detalhes = screen.getByText('More details');
  userEvent.click(detalhes);

  const favorito = screen.getByText('Pokémon favoritado?');
  userEvent.click(favorito);

  const favorites = screen.getByAltText('Pikachu is marked as favorite');
  expect(favorites.src).toContain('http://localhost/star-icon.svg');
});

test('É exibido na tela um:', () => {
  renderWithRouter(<App />);
  const tipo = screen.getByTestId('pokemon-type');
  const link = screen.getByRole('link', { name: 'More details' });

  expect(tipo.innerHTML).toContain('Electric');
  expect(link.href).toContain('/pokemons/25');
});
