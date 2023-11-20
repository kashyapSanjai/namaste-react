import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    let errorInfo = useRouteError();
    console.log(errorInfo);
    return (
        <div>
            <h1>Error Page</h1>
            <h2>{errorInfo.status} : {errorInfo.statusText}</h2>
        </div>
    );
};
export default ErrorPage