import React from "react";
import { DarkModeContext } from "./Context";
import type { propsType, darkModeStateType } from "./types";

export default function Provider(props: propsType) {
  const [isDarkTheme, setDarkTheme] = React.useState<darkModeStateType>(
    undefined
  );

  const toggleTheme = React.useCallback(
    () => setDarkTheme((prev) => !prev),
    []
  );

  React.useEffect(() => {
    if (isDarkTheme !== undefined) {
      if (isDarkTheme) {
        // Set dark mode
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        // Set light mode
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [isDarkTheme]);

  React.useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );

    setDarkTheme(initialColorValue === "dark");
  }, []);

  const providerValue = React.useMemo(() => ({ isDarkTheme, toggleTheme }), [
    isDarkTheme,
    toggleTheme,
  ]);

  return <DarkModeContext.Provider value={providerValue} {...props} />;
}
