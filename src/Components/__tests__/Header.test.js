import Header from '../Header';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import appStore from '../../utils/appStore';


test("",() =>{
   render( <BrowserRouter>
    <Provider store={appStore}>
        render(<Header/>);
    </Provider>
    </BrowserRouter>
    );
  expect(screen.getByText("Hunger Dash")).toBeInTheDocument();
});
