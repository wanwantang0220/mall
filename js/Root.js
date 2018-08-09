/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import App from "./App";
import {SharedElementRenderer} from "react-native-motion";

const store = configureStore();

export default class Root extends PureComponent {

    render() {
        return (
            <Provider store={store}>
                <SharedElementRenderer>
                    <App/>
                </SharedElementRenderer>
            </Provider>
        )
    }


}
