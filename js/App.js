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
import CommentLongPage from "./pages/CommentLongPage";
import SearchPage from "./pages/SearchPage";
import ThemesPage from "./pages/ThemesPage";

const App = createStackNavigator({
    Tab: {
        screen: TabPage
    },
    NewDetail: {
        screen: NewDetailPage
    },
    CommentLong: {
        screen: CommentLongPage
    },
    Search: {
        screen: SearchPage
    },
    Themes: {
        screen: ThemesPage
    }

}, {
    tabBarPosition: "bottom"
});

export default App;
