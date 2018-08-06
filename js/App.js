/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator} from "react-navigation";
import TabPage from "./pages/TabPage";

const App = createStackNavigator({
    Tab: {
        screen: TabPage
    }

}, {
    tabBarPosition:"bottom"
});

export default App;
