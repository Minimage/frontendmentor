import { useMediaQuery } from "react-responsive";
import { ComingSoon } from "./ComingSoon/Desktop/ComingSoon";
import { ComingSoonMobile } from "./ComingSoon/Mobile/ComingSoonMobile";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1023 });
  return isDesktop ? <ComingSoon /> : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 796, maxWidth: 1022 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 795 });
  return isMobile ? <ComingSoonMobile /> : null;
};
// const Default = ({ children }) => {
//   const isNotMobile = useMediaQuery({ minWidth: 768 });
//   return isNotMobile ? children : null;
// };

export const Responsive = () => (
  <div>
    <Desktop>Desktop or laptop</Desktop>
    <Tablet>Tablet</Tablet>
    <Mobile>Mobile</Mobile>
    {/* <Default>Not mobile (desktop or laptop or tablet)</Default> */}
    {/* <Test /> */}
  </div>
);
