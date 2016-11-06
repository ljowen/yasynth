export class AudioOutput {
    constructor(store) {
        console.log('ao constr', store);
        this.store = store;
        this.context = new AudioContext();
        store.subscribe((this.update.bind(this)));
    }

    update() {
        let _seq = this.store.getState().sequencer;

        _seq.sequence.forEach((row,i) => {
            console.log(row, _seq.step);
            if(row.steps[_seq.step]) {
                var ctx = this.context;
                var osc = ctx.createOscillator();
                osc.frequency.value = row.freq;
                osc.connect(ctx.destination);
                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + 0.3);
            }
        });
    }
}