export type darkModeStateType = boolean | undefined;
export interface contextInterface {
  isDarkTheme: darkModeStateType;
  toggleTheme: () => void;
}

export interface propsType {
  children: React.ReactNode;
}
