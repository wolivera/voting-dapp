import { ReactChild, ReactFragment, ReactPortal } from "react";

const Body = ({ ...props }) => {
    return (
      <div className="hero min-h-screen bg-base-200">
        {props.children}
      </div>
    );
  };
  
  export default Body;
  