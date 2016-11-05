import _ from 'lodash';

const initialState = {
    n_ticks: 0,
    n_steps: 8,
    n_notes: 8,
    step: 0,
    sequence: (new Array(8)).fill(null).map((e,i) => {
        return {
            freq : 50 + i*20,
            steps : (new Array(8)).fill(false)
        }
    })
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