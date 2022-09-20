import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

test('Teste se são exibidos todos os cards de pokémons favoritados.', () => {
  renderWithRouter(<NotFound />);
  const headingH2 = screen.getByRole('heading', {
    name: 'Page requested not found', level: 2 });
  const image = screen.getByRole('img');

  expect(headingH2).toBeInTheDocument();
  expect(image.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
