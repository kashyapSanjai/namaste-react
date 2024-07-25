import { render,act,screen, fireEvent } from "@testing-library/react"
import Body from "../Body";
// import { act } from "react-dom/test-utils";
import MOCK_REST_LIST from "../mocks/mockRestListData.json"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_REST_LIST);
        }
    })
});


it("should search restaurant list with burger input",async()=>{
    await act(async()=>{
        render(<BrowserRouter><Body/></BrowserRouter>)
    })
    const restListBeforeSearch = screen.getAllByTestId("restCard");
    expect(restListBeforeSearch.length).toBe(20)

    const searchBtn = screen.getByRole("button",{name:"Search"});
    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput,{target:{value:"burger"}});
    fireEvent.click(searchBtn)

    const restCardAfterSearch = screen.getAllByTestId("restCard");
    expect(restCardAfterSearch.length).toBe(1);

})

it("should filter top rated restaurant",async()=>{
    await act(async()=>{
        render(<BrowserRouter><Body/></BrowserRouter>)
    })
    const restListBeforeFilter = screen.getAllByTestId("restCard");
    expect(restListBeforeFilter.length).toBe(20)

    const topRatedBtn = screen.getByRole("button",{name:"Top rated Restaurant"});
    fireEvent.click(topRatedBtn)

    const restCardAfterFilter = screen.getAllByTestId("restCard");
    expect(restCardAfterFilter.length).toBe(16);

})