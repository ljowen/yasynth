const initialState = {
    play: false
}

const playback = (state = initialState, action) => {
    switch (action.type) {
        case 'PLAY':
            return {
                play: true
            }
        case 'STOP':
            return {
                play : false
            }
        default:
            return state
    }
}

export default playback;