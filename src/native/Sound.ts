import { SoundInterface } from "../shared/Sound";
import { Audio } from "expo";

export default class SoundNative implements SoundInterface {
    resource: any;
    constructor() {
        this.resource = require("../../assets/sounds/decision22.mp3");
    }

    async play() {
        await Audio.Sound.create(
            this.resource,
            { shouldPlay: true }
        );
    }
}