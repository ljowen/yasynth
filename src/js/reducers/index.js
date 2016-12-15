import { combineReducers } from 'redux';
import sequencer from './sequencer';
import playback from './playback';

const yasApp = combineReducers({
    sequencer,
    playback
})

export default yasApp