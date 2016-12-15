import React, { Component, PropTypes } from 'react'
export const PlaybackControls = ({ onPlayClick, onStopClick, onStepClick}) => (
    <div className="panel">
        <a onClick={onPlayClick} className="btn btn-success">
            PLAY
        </a>
        <a onClick={onStopClick}  className="btn btn-danger">
            STOP
        </a>
        <a onClick={onStepClick} className="btn btn-info">
            STEP
        </a>
    </div>
);