import WelcomePage from '@app/modules/default';

import { registerComponent } from './reduxHelpers';

export const SCREENS = {
    DEFAULT: `WelcomeScreen`,
  };

export const registerScreen  = () => {
    registerComponent(SCREENS.DEFAULT, WelcomePage);
}
