export class AudioOutput {
    constructor(store) {
        //console.log('ao constr', store);
        this.store = store;
        this.context = new AudioContext();
        this.n_gain = this.context.createGain();
        this.n_gain.connect(this.context.destination);

        store.subscribe((this.update.bind(this)));
    }

    update() {

        let _seq = this.store.getState().sequencer;
        this.n_gain.gain.value = (1 / _seq.sequence.length);
        _seq.sequence.forEach((row,i) => {
            if(row.steps[_seq.step]) {
                var ctx = this.context;
                var osc = ctx.createOscillator();
                osc.type = 'sine';
                osc.frequency.value = row.freq;
                osc.connect(this.n_gain);
                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + 0.3);

                console.log('osc', osc);
                //osc.disconnect();
            }
        });
    }
}