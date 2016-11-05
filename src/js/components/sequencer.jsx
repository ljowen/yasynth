import React, { Component, PropTypes } from 'react'

const renderRow = (row, onStepClick, step, colNum) => {
    return row.map((e,i) => {
        return <td key={i}>
            <a style={{height: '20px'}}
               onClick={onStepClick.bind(this, {step : i, note : colNum, on : !e.on})}
               className={'btn btn-block btn-primary '+ (e.on ? ' btn-success ' : '')  + (i == step ? ' btn-warning ' : '')}>
                {i}
            </a>
        </td>
    });
}

const renderGrid = (step, n_steps, sequence, onStepClick) => {
    return sequence.map((e,i) => {
        return <tr key={i} >
            {renderRow(e.steps, onStepClick, step, i)}
       </tr>
    });
}

export const Sequencer = ({ step, n_ticks, n_steps, sequence, onStepClick }) => (
    <div className="">
        <pre>{JSON.stringify([step, n_ticks, sequence], null, 2)}</pre>
        <table className="table no-border">
            <tbody>
                {renderGrid(step, n_steps, sequence, onStepClick)}
            </tbody>
        </table>
    </div>
);

