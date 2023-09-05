import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>OOPS Something Went Wrong</h1>
            <h3>Status-{err.status}</h3>
            <h4>{err.statusText}</h4>
        </div>
    )
}

export default Error;