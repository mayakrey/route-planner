import { render, screen } from '@testing-library/react';
import SidePanel from './SidePanel';
import {PositionContext} from '../../context/positionContext';

test('renders SidePanel component', () => {
  render(
    <PositionContext.Provider value={[{lat:1212, lng:34325}, {lat:1212, lng:34325}]}>
      <SidePanel />
    </PositionContext.Provider>
  );
  const component = screen.getByTestId('panel');
  const title = screen.getByText('Route Builder')
  const button = screen.getByText('Download your Route');

  expect(component).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});