import { connect } from 'react-redux'
import { tick, updateSequence } from '../actions'
import {Sequencer} from '../components/sequencer.jsx';

const mapStateToProps = (state) => ({
   n_ticks : state.sequencer.n_ticks,
   step : state.sequencer.step,
   n_steps : state.sequencer.n_steps,
   sequence : state.sequencer.sequence
});

const mapDispatchToProps = (dispatch) => {
   return {
      onStepClick : (val, row, col) => {
         dispatch(updateSequence(val, row, col))
      }
   }
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Sequencer);