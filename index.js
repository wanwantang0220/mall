/** @format */

import {AppRegistry,YellowBox} from 'react-native';
import Root from './js/Root';
import {name as appName} from './app.json';


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent(appName, () => Root);
