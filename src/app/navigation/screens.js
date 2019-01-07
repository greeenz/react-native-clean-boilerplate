import { Navigation } from "react-native-navigation";

import WelcomePage from '@app/modules/default';

export const SCREENS = {
    DEFAULT: `WelcomeScreen`,
  };

export const registerScreen  = () => {
    Navigation.registerComponent(SCREENS.DEFAULT, () => WelcomePage);
}
