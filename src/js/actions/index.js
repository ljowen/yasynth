export const tick = () => ({
    type: 'TICK'
});

export const updateSequence = (value) => ({
    type: 'UPDATE_SEQUENCE',
    value //
});

export const play = () => ({
    type: 'PLAY',
});

export const stop = () => ({
    type: 'STOP',
});

export const step = () => ({
    type: 'STEP',
});