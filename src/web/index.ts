import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('WebpackedMultiTargetSample', () => App);
AppRegistry.runApplication('WebpackedMultiTargetSample', {
    rootTag: document.querySelector('main')
})