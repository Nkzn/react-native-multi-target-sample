export interface SoundInterface {
    play(): Promise<void>;
}

export default class Sound {
    static soundInterface: SoundInterface;

    async play() {
        try {
            await Sound.soundInterface.play();            
        } catch (e) {
            console.error(e);
        }
    }
}