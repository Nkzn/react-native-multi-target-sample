import App from "./App";
export default App;

import Sound from "../shared/Sound";
import SoundNative from "./Sound";
Sound.soundInterface = new SoundNative();
