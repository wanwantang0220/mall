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
import TimeAxisPage from "./pages/TimeAxisPage";
import SharedInfoPage from "./pages/SharedInfoPage";
import ClassfyDetailPage from "./pages/ClassfyDetailPage";

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
    },
    TimeAxis: {
        screen: TimeAxisPage
    },
    SharedInfo: {
        screen: SharedInfoPage
    },
    ClassfyDetail: {
        screen: ClassfyDetailPage
    }

}, {
    tabBarPosition: "bottom"
});

export default App;
