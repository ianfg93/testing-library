import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

test('Teste se a página contém as informações sobre a Pokédex', () => {
  renderWithRouter(<About />);
  const headingH2 = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });
  const image = screen.getByRole('img', { name: 'Pokédex' });

  expect(headingH2).toBeInTheDocument();
  expect(image.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
