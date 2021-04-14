import { render, screen } from '@testing-library/react';
import Map from './Map';
import {PositionContext} from '../../context/positionContext';

test('renders Map component', () => {
  render(
    <PositionContext.Provider value={[{lat:1212, lng:34325}, {lat:1212, lng:34325}]}>
      <Map />
    </PositionContext.Provider>
  );
  const component = screen.getByTestId('map');
  expect(component).toBeInTheDocument();
});