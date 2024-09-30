import { render } from '@testing-library/react';
import {DarkModeProvider} from './DarkModeContext';

const TestingComponent = () => {
  return (
    <DarkModeProvider>
      <p>Test</p>
    </DarkModeProvider>
  );
};

describe('<AuthProvider />', () => {
  test('provides expected AuthContext to child elements', () => {
    const { getByTestId } = render(
      <TestingComponent />
    );
    console.log(getByTestId)
  })

})
