import _ from 'lodash';

var __seq = [{"steps":[true,true,false,false,false,false,false,false],"freq":523.25},{"steps":[false,false,false,true,false,true,false,false],"freq":493.88},{"steps":[true,true,false,false,true,false,true,false],"freq":440},{"steps":[false,false,false,true,false,true,false,true],"freq":392},{"steps":[true,true,false,false,false,false,true,false],"freq":349.23},{"steps":[false,false,true,false,false,false,false,true],"freq":329.63},{"steps":[true,true,false,true,false,false,false,false],"freq":293.66},{"steps":[false,false,true,false,false,false,false,true],"freq":261.63}]


const scale = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25];

const initialState = {
    n_ticks: 0,
    n_steps: 8,
    n_notes: 8,
    step: 0,
    //sequence: (new Array(8)).fill(null).map((e,i) => {
    //    return {
    //        freq : scale[7-i],//200 - i*20,
    //        steps : (new Array(8)).fill(false)
    //    }
    //}),
    sequence: __seq,
    play: false
}

console.log('seq red init', initialState);

const sequencer = (state = initialState, action) => {
    switch (action.type) {
        case 'TICK':
            return {
                n_ticks: state.n_ticks+1,
                step: (state.n_ticks+1) % state.n_steps,
                n_steps : state.n_steps,
                sequence : state.sequence
            }
        case 'UPDATE_SEQUENCE':
            console.log('up seq', action.value);
            return Object.assign({}, state, {
                sequence : state.sequence.map((row,i) => {
                    if(i !== action.value.note) { return row; }
                    //console.log('i r', i, action.value.note);
                    return {
                        steps : row.steps.map((on, j) => {
                            if(j == action.value.step) {
                                return action.value.on;
                            }
                            return on;
                        }),
                        freq : row.freq
                    }

                })
            });
        default:
            return state
    }
}

export default sequencer;