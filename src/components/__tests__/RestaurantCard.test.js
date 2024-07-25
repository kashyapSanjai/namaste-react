import { render, screen } from "@testing-library/react";
import RestaurantCard, {withDiscountedLabel} from "../RestaurantCard";
import MOCK_DATA from "../mocks/restCardMock.json"
import "@testing-library/jest-dom"

it("should render the restaurantCard component with the prop data",()=>{
    render(<RestaurantCard restaurantInfo = {MOCK_DATA}/>)
    const restName = screen.getByText("Chinese Wok");
    expect(restName).toBeInTheDocument();
})

it("should render the restaurantCard component with promoted label",()=>{
    const DiscountedPriceRestaurant = withDiscountedLabel(RestaurantCard);
    render(<DiscountedPriceRestaurant restaurantInfo = {MOCK_DATA}/>)
    const restName = screen.getByText("ITEMS AT ₹169")
    expect(restName).toBeInTheDocument();
})