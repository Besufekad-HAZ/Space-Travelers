import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Mission from '../component/missions';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';

describe('Mission component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Mission />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
