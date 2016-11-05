export class AudioOutput {
    constructor(store) {
        console.log('ao constr', store);
        this.store = store;
        this.context = new AudioContext();
        store.subscribe((this.update.bind(this)));
    }

    update() {
        let _seq = this.store.getState().sequencer;
        if(! _seq.sequence[_seq.step].on) {
            return;
        } else {
            var context = this.context;
            var osc = context.createOscillator();
            osc.frequency.value = _seq.sequence[_seq.step].freq;
            osc.connect(context.destination);
            osc.start(context.currentTime);
            osc.stop(context.currentTime + 0.5);
        }
    }
}