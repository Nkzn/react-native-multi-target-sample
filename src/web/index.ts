import { AppRegistry } from 'react-native';
import App from './App';

import SoundWeb from "./Sound";
import Sound from "../shared/Sound";
Sound.soundInterface = new SoundWeb();

AppRegistry.registerComponent('WebpackedMultiTargetSample', () => App);
AppRegistry.runApplication('WebpackedMultiTargetSample', {
    rootTag: document.querySelector('main')
})