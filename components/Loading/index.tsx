import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ color = "bg-blue-700" }) => (
  <ReactLoading type="cubes" color={color} height={50} />
);

const LoadingCover = ({ color = "bg-blue-700" }) => (
  <div className="absolute flex justify-center items-center top-0 bottom-0 left-0 right-0">
    <Loading color={color} />
  </div>
);

export default Loading;
export { LoadingCover };
