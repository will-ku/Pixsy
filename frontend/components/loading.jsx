import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export const LoadingIcon = () => (
  <div className="loader">

    <ClipLoader  size={150} />
    {/* <ClipLoader color={color} loading={loading} css={override} size={150} /> */}
  </div>
);
