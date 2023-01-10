import React from 'react'
import { ProgressBar } from 'react-bootstrap';

const ProgressBarHorizontal = ({ progress }) => (
    <ProgressBar animated variant="success" now={progress} label={`${progress}%`} />
)

export default ProgressBarHorizontal