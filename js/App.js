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
import NewDetailPage from "./pages/NewDetailPage";

const App = createStackNavigator({
    Tab: {
        screen: TabPage
    },
    NewDetail: {
        screen: NewDetailPage
    }

}, {
    tabBarPosition:"bottom"
});

export default App;
