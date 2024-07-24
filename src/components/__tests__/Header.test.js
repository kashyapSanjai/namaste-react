import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utility/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


it("should render Header Component with login button",()=>{
    render(
       <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
       </BrowserRouter>
    );

    const result = screen.getByRole("button",{ name:"Login" });
    expect(result).toBeInTheDocument();
})

it("should render Header Component with Cart 0 items",()=>{
    render(
       <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
       </BrowserRouter>
    );

    const result = screen.getByText("Cart (0 Items)");
    expect(result).toBeInTheDocument();
})

it("should render Header Component with Cart exist or not",()=>{
    render(
       <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
       </BrowserRouter>
    );

    const result = screen.getByText(/Cart/);//regex
    expect(result).toBeInTheDocument();
})

it("should change login button into logout on click",()=>{
    render(
       <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
       </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{ name:"Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button",{ name:"Logout" });
    expect(logoutButton).toBeInTheDocument();
})