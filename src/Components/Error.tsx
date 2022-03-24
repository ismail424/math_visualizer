import { ReactElement } from "react";

const Error = (props: any) : ReactElement<any, any> => {
    if (props.error === "") {
        return <div></div>
    }
    else {
        return <div className="error">{props.error}</div>;
    };
}


export default Error;