import React from 'react';

import { View, ActivityIndicator, Text } from 'react-native';

import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '@app/redux/store';

const HocProvider = ( WrappedComponent ) => {
    class Enhance extends React.Component {
        render() {
            return(
                <Provider store={store} >
                    <PersistGate persistor={persistor} loading={
                        <View style={{flex: 1, justifyContent: 'center', height: '100%', backgroundColor: '#FFFF'}} >
                            <ActivityIndicator style={{ alignSelf: 'center', justifyContent: 'center' }} size="large" color="blue" />
                        </View>
                    } >
                        <WrappedComponent {...this.props} persistor={persistor} />
                    </PersistGate>
                </Provider>
            )
        }
    }
    return Enhance;
}

export const registerComponent = (name, component) => {
    Navigation.registerComponent(
        name, () => HocProvider(component),
    )
}