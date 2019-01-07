import { Navigation } from 'react-native-navigation';
import { SCREENS } from './screens';

import { DEFAULT_SCREEN as DEV_ROOT_SCREEN } from '@config/development';

const ROOT_SCREEN = () => {
  if (__DEV__){
    return DEV_ROOT_SCREEN
  } else {
    return SCREENS.DEFAULT
  }
}

export const registerListeners = () => {
    Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
        root: {
          component: {
            name: ROOT_SCREEN(),
          },
        },
      });
    });
}