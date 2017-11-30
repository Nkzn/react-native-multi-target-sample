import { SoundInterface } from "../shared/Sound";

export default class SoundWeb implements SoundInterface {

    context = new AudioContext();
    buffer: AudioBuffer;

    constructor() {
        this.setup();
    }

    async setup() {
        const response = await fetch("/sounds/decision22.mp3");
        this.buffer = await this.context.decodeAudioData(await response.arrayBuffer());
    }

    async play() {
        const source = this.context.createBufferSource();
        source.buffer = this.buffer;
        source.connect(this.context.destination);
        source.start(0);
    }
}