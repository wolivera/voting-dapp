import { ReactChild, ReactFragment, ReactPortal } from "react";

const Body = (props: any) =>
    <div className="min-h-screen relative bg-base-200 flex">
        {props.children}
    </div>

export default Body;
