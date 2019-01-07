import { initNavigation } from '@app/navigation';

import { IGNORE_YELLOW_WARNING } from '@config/development'

export const App = () => {
    if (__DEV__){
        IGNORE_YELLOW_WARNING
    }
    initNavigation()
}