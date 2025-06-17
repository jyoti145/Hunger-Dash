import {render , screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Body from '../Body';
import Mock_Data from '../../../Mocks/resListMockData.json';
import {act} from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

global.fetch = jest.fn(() => 
  Promise.resolve({
    json: () => Promise.resolve(Mock_Data)
  })
);

it("Body component should render with correct props", async () => {
 await act (async() => render(
   <BrowserRouter>
     <Body />
   </BrowserRouter>
 )
 );

 const searchbtn = screen.getByRole( "button", {name: "Search" });
  expect(searchbtn).toBeInTheDocument(); 
})