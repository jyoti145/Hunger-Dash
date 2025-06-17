import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import RestaurantCard from '../RestaurtantCard';
import MOCK_DATA from '../../../Mocks/resCardMock.json';


it("RestaurantCard component should render with correct props", () => {
 render(<RestaurantCard resname ={MOCK_DATA}/>);
    const resName = screen.getByText("KFC");
    expect(resName).toBeInTheDocument();
 

   
  

   

});