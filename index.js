/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import NavApp from './NavApp';
import AppDrawer from './AppDrawer';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

// AppRegistry.registerComponent(appName, () => App);

// for learinng navigation
// AppRegistry.registerComponent(appName, () => NavApp);
AppRegistry.registerComponent(appName, () => AppDrawer);
