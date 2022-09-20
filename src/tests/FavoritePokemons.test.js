import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';

test('Teste se são exibidos todos os cards de pokémons favoritados.', () => {
  renderWithRouter(<FavoritePokemons />);
  const noFavorite = screen.getByText('No favorite pokemon found');

  expect(noFavorite).toBeInTheDocument();
});
