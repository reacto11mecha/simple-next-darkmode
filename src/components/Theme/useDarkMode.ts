import React from "react";
import { DarkModeContext } from "./Context";

const useDarkMode = () => React.useContext(DarkModeContext);
export default useDarkMode;
