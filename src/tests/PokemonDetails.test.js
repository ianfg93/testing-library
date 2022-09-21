import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('É exibido na tela um h2 com o texto Details', () => {
  renderWithRouter(<App />);
  const detalhes = screen.getByRole('link', { name: 'More details' });
  userEvent.click(detalhes);

  const heading1 = screen.getByRole('heading', {
    name: 'Pikachu Details',
    level: 2,
  });
  expect(heading1).toBeInTheDocument();
});

test('É exibido na tela um h2 com o texto Summary', () => {
  renderWithRouter(<App />);
  const heading2 = screen.getByRole('heading', { name: 'Summary', level: 2 });
  expect(heading2).toBeInTheDocument();
});

test('É exibido na tela um h2 com o texto Game Locations of', () => {
  renderWithRouter(<App />);
  const heading3 = screen.getByRole('heading', {
    name: 'Game Locations of Pikachu',
    level: 2,
  });
  expect(heading3).toBeInTheDocument();
});

test('São exibidas na tela imagens de localização com o src correto', () => {
  renderWithRouter(<App />);
  const localizacao = screen.getByRole('img');
  expect(localizacao[0].src).toContain(
    'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png',
  );
});

test('É exibido na tela uma label com o texto Pokémon favoritado?', () => {
  renderWithRouter(<App />);
  const pokemonFavorito = screen.getByRole('checkbox', { name: 'Pokémon favoritado?' });
  expect(pokemonFavorito).toBeInTheDocument();
});
