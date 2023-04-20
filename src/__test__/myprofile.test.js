import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import MyProfile from '../component/myprofile';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';

describe('MyProfile component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <MyProfile />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
