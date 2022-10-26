/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import NavApp from './src/NavApp';
// import AppDrawer from './src/AppDrawer';
import AsynStorageApp from './src/AsynStorageApp';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

// AppRegistry.registerComponent(appName, () => App);

// for learinng navigation
// AppRegistry.registerComponent(appName, () => NavApp);
AppRegistry.registerComponent(appName, () => AsynStorageApp);
