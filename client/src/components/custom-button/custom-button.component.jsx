import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

// const CustomButton = ({ children, isGoogleSignIn, inverted, ...restProps }) => (
//   <button className={`${inverted ? "inverted" : ""} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...restProps}>
//   {children}
//   </button>
// )

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
