import { connect } from 'react-redux';
import { tick, updateSequence, play, stop } from '../actions'
import {Sequencer} from '../components/sequencer.jsx';
import {PlaybackControls} from '../components/playback.jsx';
import React, { Component, PropTypes } from 'react';

const App = ({
    step,
    n_ticks,
    n_steps,
    sequence,
    onCellClick,
    onPlayClick,
    onStepClick,
    onStopClick
    }) => (
       <div className="container">
         <PlaybackControls onPlayClick={onPlayClick} onStopClick={onStopClick} onStepClick={onStepClick}  />
          <Sequencer step={step} sequence={sequence} onCellClick={onCellClick} />
       </div>
);

const mapStateToProps = (state) => ({
   n_ticks : state.sequencer.n_ticks,
   step : state.sequencer.step,
   n_steps : state.sequencer.n_steps,
   sequence : state.sequencer.sequence
});

const mapDispatchToProps = (dispatch) => {
   return {
      onCellClick : (val, row, col) => {
         dispatch(updateSequence(val, row, col))
      },
      onPlayClick : () => {
         dispatch(play());
      },
      onStopClick : () => {
         dispatch(stop());
      },
      onStepClick : () => {
         dispatch(tick());
      },
   }
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);