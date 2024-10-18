/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import LottiePlayer from "lottie-react";

interface LottieProps {
  animationData: any;
  autoPlay?: boolean;
  loop?: boolean;
}

export default function LottieComponent({
  animationData,
  autoPlay,
  loop,
}: LottieProps) {
  return (
    <LottiePlayer
      animationData={animationData}
      autoPlay={autoPlay}
      loop={loop}
    />
  );
}
