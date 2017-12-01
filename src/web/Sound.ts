import { SoundInterface } from "../shared/Sound";
import "../../assets/sounds/decision22.mp3"; // webpack magic

const _AudioContext = (<any>window).AudioContext || (<any>window).webkitAudioContext;

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

        const responseBuffer = await response.arrayBuffer();

        this.buffer = <AudioBuffer>await new Promise((resolve, reject) => {
            // webkitAudioContext does not have Promised decodeAudioData
            this.context.decodeAudioData(responseBuffer, (buffer: AudioBuffer) => {
                resolve(buffer);
            }, (e: any) => {
                reject(e);
            });
        });
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