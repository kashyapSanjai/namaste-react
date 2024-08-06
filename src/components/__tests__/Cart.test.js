import { render,act,screen, fireEvent } from "@testing-library/react"
import cartMock from "../mocks/cartMockData.json"
import RestaurantsMenu from "../RestaurantsMenu"
import Header from "../Header"
import Cart from "../Cart"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"
import appStore from "../../utility/appStore"
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=> 
    Promise.resolve({
    json:()=>Promise.resolve(cartMock)
}))

it("it should load restuarent menu compoonent", async ()=>{
    await act(async()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                    <RestaurantsMenu/>
                    <Cart/>
                </Provider>
            </BrowserRouter>)
        })

    const accordian = screen.getByText("BURGERS (19)");
    fireEvent.click(accordian);
    const foodItems = screen.getAllByTestId("food-items");
    expect(foodItems.length).toBe(19);
    const addButtons = screen.getAllByRole("button",{name:"Add+"});
    fireEvent.click(addButtons[0]);
    expect(screen.getByText("Cart (1 Items)")).toBeInTheDocument();
    fireEvent.click(addButtons[1]);
    expect(screen.getByText("Cart (2 Items)")).toBeInTheDocument();
    expect(screen.getAllByTestId("food-items").length).toBe(21);
    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));
    expect(screen.getAllByTestId("food-items").length).toBe(19);
})