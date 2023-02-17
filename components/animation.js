import React from "react";
import Lottie from "react-lottie";
import animationData from "../data/nintendo.json";

function Nintendo() {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  
    return <Lottie options={defaultOptions} height={500} width={800} />;
  }
  
  export default Nintendo;