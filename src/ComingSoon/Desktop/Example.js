import { useLottie, useLottieInteractivity } from "lottie-react";
import likeButton from "../../assests/success.json";

const style = {
  height: 300,
  marginTop: "17%",
};

const options = {
  animationData: likeButton,
};

const Example = () => {
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    type: "seek",
    actions: [
      {
        visibility: [0.4, 0.9],
        type: "play",
      },
    ],
  });

  return Animation;
};

export default Example;
