
// const Shimmer = () =>{
//     return <h1>Loading......</h1>
// }

import React from "react";
import { ShimmerSimpleGallery } from "react-shimmer-components";

const Shimmer = () => {

    return (
        <>
        {/* <ShimmerSimpleGallery imageType="circular" imageHeight={200} caption /> */}
        {/* <ShimmerSimpleGallery card imageHeight={300} /> */}
        <ShimmerSimpleGallery card imageHeight={300} caption />
      </>
    );
}


export default Shimmer;