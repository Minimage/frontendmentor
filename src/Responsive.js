import { useMediaQuery } from "react-responsive";
import { Results } from "./Results/Desktop/Results";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 750 });
  return isDesktop ? <Results /> : null;
};
// const Tablet = ({ children }) => {
//   const isTablet = useMediaQuery({ minWidth: 796, maxWidth: 1022 });
//   return isTablet ? children : null;
// };
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 749 });
  return isMobile ? children : null;
};
// const Default = ({ children }) => {
//   const isNotMobile = useMediaQuery({ minWidth: 768 });
//   return isNotMobile ? children : null;
// };

export const Responsive = () => (
  <div>
    <Desktop>Desktop or laptop</Desktop>
    {/* <Tablet>Tablet</Tablet> */}
    <Mobile>Mobile</Mobile>
    {/* <Default>Not mobile (desktop or laptop or tablet)</Default> */}
    {/* <Test /> */}
  </div>
);
