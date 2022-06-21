import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ color = 'bg-blue-700' }) => (
    <ReactLoading type="cubes" color={color} height={50} />
);
 
export default Loading;
