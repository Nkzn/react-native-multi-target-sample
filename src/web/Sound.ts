import { SoundInterface } from "../shared/Sound";
import "../../assets/sounds/decision22.mp3"; // webpack magic

const _AudioContext = AudioContext || (<any>window).webkitAudioContext;

export default class SoundWeb implements SoundInterface {

    context = new _AudioContext();
    buffer: AudioBuffer;

    constructor() {
        this.setup();
    }

    async setup() {
        if (!this.context) {
            return;
        }
        const response = await fetch("/sounds/decision22.mp3");
        this.buffer = await this.context.decodeAudioData(await response.arrayBuffer());
    }

    async play() {
        if (!this.context) {
            return;
        }
        const source = this.context.createBufferSource();
        source.buffer = this.buffer;
        source.connect(this.context.destination);
        source.start(0);
    }
}